@php
    /** @var \App\MoonShine\Fields\SpatieUppyFile $element */
@endphp
@php
    $column = $element->column();
    $parent = $element->parent();
    $elData = match (true) {
        $parent instanceof \MoonShine\Fields\Json => $parent,
        default => $element,
    };
    $value = match (true) {
        $element->value() instanceof \Illuminate\Support\Collection => $element->value()->toArray(),
        !$element->value() => [],
        is_string($element->value()) => json_decode($element->value()),
        default => $element->value(),
    };
@endphp
<div x-cloak
    x-data='{
        value: @json($value),
        allowedFileTypes: @json($element->allowedFileTypes()),
        maxNumberOfFiles: {{ $element->countFiles() }},
        endpoint: "{{ route('gt-moonshine-file.upload') }}",
        csrfToken: "{{ csrf_token() }}",
    }'
    x-init="console.log(value)
    const uppy = new Uppy.Uppy({
            locale: {
                strings: {
                    addBulkFilesFailed: {
                        '0': 'Error al agregar %{smart_count} archivo debido a un error interno',
                        '1': 'Error al agregar %{smart_count} archivos debido a errores internos',
                    },
                    addMore: 'Agregar más',
                    addMoreFiles: 'Agregar más archivos',
                    addingMoreFiles: 'Agregando más archivos',
                    allowAccessDescription: 'Para tomar fotos o grabar video con su cámara, por favor permita el acceso a la cámara para este sitio.',
                    allowAccessTitle: 'Por favor permita el acceso a su cámara',
                    aspectRatioLandscape: 'Recortar horizontal (16:9)',
                    aspectRatioPortrait: 'Recortar vertical (9:16)',
                    aspectRatioSquare: 'Recortar cuadrado',
                    authenticateWith: 'Conectar a %{pluginName}',
                    authenticateWithTitle: 'Por favor autentíquese con %{pluginName} para seleccionar archivos',
                    back: 'Atrás',
                    backToSearch: 'Volver a buscar',
                    browse: 'explorar',
                    browseFiles: 'explorar archivos',
                    browseFolders: 'explorar carpetas',
                    cancel: 'Cancelar',
                    cancelUpload: 'Cancelar subida',
                    chooseFiles: 'Elegir archivos',
                    closeModal: 'Cerrar ventana emergente',
                    complete: 'Completo',
                    connectedToInternet: 'Conectado a Internet',
                    copyLink: 'Copiar enlace',
                    copyLinkToClipboardFallback: 'Copie la URL a continuación',
                    copyLinkToClipboardSuccess: 'Enlace copiado al portapapeles',
                    creatingAssembly: 'Preparando subida...',
                    creatingAssemblyFailed: 'Transloadit: No se pudo crear el ensamblado',
                    dashboardTitle: 'Cargador de archivos',
                    dashboardWindowTitle: 'Ventana de cargador de archivos (Presione escape para cerrar)',
                    dataUploadedOfTotal: '%{complete} de %{total}',
                    discardRecordedFile: 'Descartar archivo grabado',
                    done: 'Hecho',
                    dropHereOr: 'Suelte archivos aquí o %{browse}',
                    dropHint: 'Suelte sus archivos aquí',
                    dropPasteBoth: 'Suelte archivos aquí, %{browseFiles} o %{browseFolders}',
                    dropPasteFiles: 'Suelte archivos aquí o %{browseFiles}',
                    dropPasteFolders: 'Suelte archivos aquí o %{browseFolders}',
                    dropPasteImportBoth: 'Suelte archivos aquí, %{browseFiles}, %{browseFolders} o importar desde:',
                    dropPasteImportFiles: 'Suelte archivos aquí, %{browseFiles} o importar desde:',
                    dropPasteImportFolders: 'Suelte archivos aquí, %{browseFolders} o importar desde:',
                    editFile: 'Editar archivo',
                    editImage: 'Editar imagen',
                    editing: 'Editando %{file}',
                    emptyFolderAdded: 'No se agregaron archivos desde la carpeta vacía',
                    encoding: 'Codificando...',
                    enterCorrectUrl: 'URL incorrecta: Asegúrese de ingresar un enlace directo a un archivo',
                    enterTextToSearch: 'Ingrese texto para buscar imágenes',
                    enterUrlToImport: 'Ingrese URL para importar un archivo',
                    exceedsSize: '%{file} excede el tamaño máximo permitido de',
                    exceedsSize2: '%{backwardsCompat} %{size}',
                    failedToFetch: 'Companion no pudo obtener esta URL, asegúrese de que sea correcta',
                    failedToUpload: 'Error al subir %{file}',
                    fileSource: 'Fuente del archivo: %{name}',
                    filesUploadedOfTotal: {
                        '0': '%{complete} de %{smart_count} archivo subido',
                        '1': '%{complete} de %{smart_count} archivos subidos',
                    },
                    filter: 'Filtrar',
                    finishEditingFile: 'Terminar de editar archivo',
                    flipHorizontal: 'Voltear horizontalmente',
                    folderAdded: {
                        '0': 'Se agregó %{smart_count} archivo de %{folder}',
                        '1': 'Se agregaron %{smart_count} archivos de %{folder}',
                    },
                    generatingThumbnails: 'Generando miniaturas...',
                    import: 'Importar',
                    importFiles: 'Importar archivos desde:',
                    importFrom: 'Importar desde %{name}',
                    inferiorSize: 'Este archivo es más pequeño que el tamaño permitido de %{size}',
                    loading: 'Cargando...',
                    logOut: 'Cerrar sesión',
                    micDisabled: 'Acceso al micrófono denegado por el usuario',
                    myDevice: 'Mi dispositivo',
                    noCameraDescription: 'Para tomar fotos o grabar videos, conecte un dispositivo de cámara',
                    noCameraTitle: 'Cámara no disponible',
                    noFilesFound: 'No tiene archivos o carpetas aquí',
                    noInternetConnection: 'Sin conexión a Internet',
                    noNewAlreadyUploading: 'No se pueden agregar nuevos archivos: ya se están subiendo',
                    openFolderNamed: 'Abrir carpeta %{name}',
                    pause: 'Pausar',
                    pauseUpload: 'Pausar subida',
                    paused: 'En pausa',
                    poweredBy: 'Desarrollado por %{uppy}',
                    poweredBy2: '%{backwardsCompat} %{uppy}',
                    processingXFiles: {
                        '0': 'Procesando %{smart_count} archivo',
                        '1': 'Procesando %{smart_count} archivos',
                    },
                    reSelect: 'Volver a seleccionar',
                    recording: 'Grabando',
                    recordingLength: 'Duración de la grabación %{recording_length}',
                    recordingStoppedMaxSize: 'La grabación se detuvo porque el tamaño del archivo está a punto de exceder el límite',
                    recoveredAllFiles: 'Restauramos todos los archivos. Ahora puede reanudar la subida.',
                    recoveredXFiles: {
                        '0': 'No pudimos recuperar completamente 1 archivo. Vuelva a seleccionarlo y reanude la subida.',
                        '1': 'No pudimos recuperar completamente %{smart_count} archivos. Vuelva a seleccionarlos y reanude la subida.',
                    },
                    removeFile: 'Eliminar archivo',
                    resetFilter: 'Restablecer filtro',
                    resume: 'Reanudar',
                    resumeUpload: 'Reanudar subida',
                    retry: 'Reintentar',
                    retryUpload: 'Reintentar subida',
                    revert: 'Revertir',
                    rotate: 'Rotar',
                    save: 'Guardar',
                    saveChanges: 'Guardar cambios',
                    searchImages: 'Buscar imágenes',
                    selectAllFilesFromFolderNamed: 'Seleccionar todos los archivos de la carpeta %{name}',
                    selectFileNamed: 'Seleccionar archivo %{name}',
                    selectX: {
                        '0': 'Seleccionar %{smart_count}',
                        '1': 'Seleccionar %{smart_count}',
                    },
                    sessionRestored: 'Sesión restaurada',
                    smile: '¡Sonríe!',
                    startCapturing: 'Comenzar captura de pantalla',
                    startRecording: 'Comenzar grabación de video',
                    stopCapturing: 'Detener captura de pantalla',
                    stopRecording: 'Detener grabación de video',
                    streamActive: 'Transmisión activa',
                    streamPassive: 'Transmisión pasiva',
                    submitRecordedFile: 'Enviar archivo grabado',
                    takePicture: 'Tomar una foto',
                    timedOut: 'Subida estancada durante %{seconds} segundos, abortando.',
                    unselectAllFilesFromFolderNamed: 'Deseleccionar todos los archivos de la carpeta %{name}',
                    unselectFileNamed: 'Deseleccionar archivo %{name}',
                    upload: 'Subir',
                    uploadComplete: 'Subida completa',
                    uploadFailed: 'Error en la subida',
                    uploadPaused: 'Subida pausada',
                    uploadXFiles: {
                        '0': 'Subir %{smart_count} archivo',
                        '1': 'Subir %{smart_count} archivos',
                    },
                    uploadXNewFiles: {
                        '0': 'Subir +%{smart_count} archivo',
                        '1': 'Subir +%{smart_count} archivos',
                    },
                    uploading: 'Subiendo',
                    uploadingXFiles: {
                        '0': 'Subiendo %{smart_count} archivo',
                        '1': 'Subiendo %{smart_count} archivos',
                    },
                    xFilesSelected: {
                        '0': '%{smart_count} archivo seleccionado',
                        '1': '%{smart_count} archivos seleccionados',
                    },
                    xMoreFilesAdded: {
                        '0': 'Se agregó %{smart_count} archivo más',
                        '1': 'Se agregaron %{smart_count} archivos más',
                    },
                    xTimeLeft: '%{time} restante',
                    youCanOnlyUploadFileTypes: 'Solo puede subir: %{types}',
                    youCanOnlyUploadX: {
                        '0': 'Solo puede subir %{smart_count} archivo',
                        '1': 'Solo puede subir %{smart_count} archivos',
                    },
                    youHaveToAtLeastSelectX: {
                        '0': 'Debe seleccionar al menos %{smart_count} archivo',
                        '1': 'Debe seleccionar al menos %{smart_count} archivos',
                    },
                    zoomIn: 'Acercar',
                    zoomOut: 'Alejar',
                }
            },
            restrictions: {
                allowedFileTypes: allowedFileTypes,
                maxNumberOfFiles: maxNumberOfFiles,
            },
        })
        .use(Uppy.Dashboard, {
            inline: true,
            target: $refs.uppyElement,
            width: '100%',
        })
        .use(Uppy.ImageEditor, {
            target: Uppy.Dashboard
        })
        .use(Uppy.XHRUpload, {
            endpoint: endpoint,
            headers: {
                'X-CSRF-Token': csrfToken,
            },
        });

    uppy.on('upload-success', function(_, resp) {
        if (maxNumberOfFiles === 1 && !!resp.body.id) {
            value = [resp.body];
        } else if (resp.body.id) {
            value.push(resp.body);
        }
    });">
    <div x-ref="uppyElement"></div>

    <div style="margin-bottom: -40px;">
        <input
            {{ $element->attributes()->merge([
                'type' => 'text',
                'style' => 'opacity: 0; z-index: -1; appearance: none; position: relative; top: -40px;',
                'name' => $element->name(),
                ':value' => "value.length ? JSON.stringify(value) : ''",
            ]) }} />
    </div>

    <template x-if="value.length > 0">
        <div class="mt-5">
            <b>Archivos subidos</b> {{-- Cambiado de 'Загруженные файлы' --}}
        </div>
    </template>
    <div class="flex flex-wrap gap-2 mt-2"
        :class="value[0]?.mime_type?.search('image') === -1 ? 'flex-col' : 'flex-row'">
        <template x-for="(item, index) in value">
            <div>
                <template x-if="item.mime_type?.search('image') !== -1">
                    <div class="flex flex-col" style="align-items: flex-end">
                        <button type="button"
                            @click.stop="$dispatch('img-popup', {open: true, src: item.original_url })">
                            <img style="object-fit: cover; width: 200px; height: 120px;" class="rounded-lg"
                                :src="item.original_url" :alt="item.name">
                        </button>

                        <button type="button" @click="value.splice(index, 1)">
                            Eliminar {{-- Cambiado de 'Удалить' --}}
                        </button>
                    </div>
                </template>
                <template x-if="item.mime_type?.search('image') === -1">
                    <div class="justify-between dropzone-item dropzone-item-file">
                        <span class="dropzone-file-icon">
                            <x-moonshine::icon icon="heroicons.document" size="6" />
                        </span>
                        <a :href="item.original_url" class="dropzone-file-name" x-text="item.name" target="_blank"></a>
                        <button type="button" @click="value.splice(index, 1)">
                            Eliminar {{-- Cambiado de 'Удалить' --}}
                        </button>
                    </div>
                </template>
            </div>
        </template>
    </div>
</div>
