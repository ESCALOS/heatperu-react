import { FormEvent } from 'react'
import { useForm } from '@inertiajs/react'

export default function ContactForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        celphone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('contact.mail'), {
            onSuccess: () => {
                reset()
                alert('Mensaje Enviado')
            },
        })
    }

    return (
        <form className="md:col-span-3" onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div>
                    <label htmlFor="name" className="text-sm text-gray-500">
                        Nombre y Apellidos
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={data.name}
                        className="contact-input"
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Ingrese sus datos"
                        autoComplete="name"
                        required={true}
                    />
                    {errors.name && <div className='text-sm text-red-500'>{errors.name}</div>}
                </div>
                <div>
                    <label htmlFor="email" className="text-sm text-gray-500">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={data.email}
                        className="contact-input"
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="Ingrese un correo electrónico"
                        autoComplete="email"
                        required={true}
                    />
                    {errors.email && <div className='text-sm text-red-500'>{errors.email}</div>}
                </div>
                <div>
                    <label htmlFor="celphone" className="text-sm text-gray-500">
                        Número telefónico
                    </label>
                    <input
                        type="text"
                        id="celphone"
                        value={data.celphone}
                        className="contact-input"
                        onChange={(e) => setData('celphone', e.target.value)}
                        placeholder="Ingrese un número telefónico"
                        autoComplete="tel"
                        required={true}
                    />
                    {errors.celphone && <div className='text-sm text-red-500'>{errors.celphone}</div>}
                </div>
                <div>
                    <label htmlFor="subject" className="text-sm text-gray-500">
                        Asunto
                    </label>
                    <input
                        type="text"
                        id="subject"
                        value={data.subject}
                        className="contact-input"
                        onChange={(e) => setData('subject', e.target.value)}
                        placeholder="Ingrese un asunto"
                        autoComplete="subject"
                        required={true}
                    />
                    {errors.subject && <div className='text-sm text-red-500'>{errors.subject}</div>}
                </div>
                <div className="md:col-span-2">
                    <label htmlFor="message" className="text-sm text-gray-500">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        value={data.message}
                        className="contact-input"
                        onChange={(e) => setData('message', e.target.value)}
                        placeholder="Escribe tu mensaje aquí..."
                        autoComplete="message"
                        required={true}
                    />
                    {errors.message && <div className='text-sm text-red-500'>{errors.message}</div>}
                </div>
            </div>
            <div className="mt-4 text-center">
                <button
                    type="submit"
                    className="px-8 py-4 text-center text-white transition-opacity duration-500 rounded-md bg-secondary-500 bg-opacity-95 hover:bg-opacity-100 text-md"
                    disabled={processing}
                >
                    {processing ? (
                        <span className="flex items-center justify-center">
                            <svg
                                className="w-5 h-5 mr-2 text-white animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Enviando
                        </span>
                    ) : (
                        'Enviar mensaje'
                    )}
                </button>
            </div>
        </form>
    )
}
