type Props = {
    height: string
}

export default function GoogleMap({ height }: Props) {
    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15607.937248690536!2d-77.049093!3d-12.0446002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9dd9a56f645%3A0x92c9e21a39254b23!2sHEAT%20FACTORY%20SAC!5e0!3m2!1ses!2spe!4v1725461386012!5m2!1ses!2spe"
            style={{ border: 0, width: '100%', height: height }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" />
    )
}
