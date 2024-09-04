<?php

namespace App\MoonShine\Handlers;

use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use MoonShine\Contracts\Resources\ResourceContract;
use MoonShine\Exceptions\ActionException;
use MoonShine\Handlers\ImportHandler;
use MoonShine\Jobs\ImportHandlerJob;
use MoonShine\MoonShineUI;
use Symfony\Component\HttpFoundation\Response;

class CommodityImportHandler extends ImportHandler
{
    public function handle(): Response
    {
        if (! request()->hasFile($this->getInputName())) {
            MoonShineUI::toast(
                __('moonshine::ui.resource.import.file_required'),
                'error'
            );

            return back();
        }

        $requestFile = request()->file($this->getInputName());

        if (! in_array(
            $requestFile->getClientOriginalExtension(),
            ['csv', 'xlsx']
        )) {
            MoonShineUI::toast(
                __('moonshine::ui.resource.import.extension_not_supported'),
                'error'
            );

            return back();
        }

        if (! $this->hasResource()) {
            throw ActionException::resourceRequired();
        }

        $this->resolveStorage();

        $path = request()->file($this->getInputName())->storeAs(
            $this->getDir(),
            str_replace('.txt', '.csv', (string) $requestFile->hashName()),
            $this->getDisk()
        );

        $path = Storage::disk($this->getDisk())
            ->path($path);

        if ($this->isQueue()) {
            ImportHandlerJob::dispatch(
                $this->getResource()::class,
                $path,
                $this->deleteAfter,
                $this->getDelimiter(),
                $this->getNotifyUsers()
            );

            MoonShineUI::toast(
                __('moonshine::ui.resource.queued')
            );

            return back();
        }

        try {
            self::process(
                $path,
                $this->getResource(),
                $this->deleteAfter,
                $this->getDelimiter(),
                $this->getNotifyUsers()
            );
            MoonShineUI::toast(
                __('moonshine::ui.resource.import.imported'),
                'success'
            );
        } catch (Exception $e) {
            MoonShineUI::toast(
                $e->getMessage(),
                'info'
            );
        } finally {
            return back();
        }

    }

    public static function process(
        string $path,
        ResourceContract $resource,
        bool $deleteAfter = false,
        string $delimiter = ',',
        array $notifyUsers = []
    ): Collection {
        try {
            $result = parent::process($path, $resource, $deleteAfter, $delimiter, $notifyUsers);

            return $result;

        } catch (QueryException $e) {
            throw new Exception('Importación parcial. Archivo con errores');
        } catch (\Exception $e) {
            throw new Exception('Error inesperado');
        }
    }
}
