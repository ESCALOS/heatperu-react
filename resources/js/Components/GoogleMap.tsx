type Props = {
    height: string
}

export default function GoogleMap({ height }: Props) {
    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7803.968048915449!2d-77.049149!3d-12.04462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8d3a1b775e5%3A0xb49319c2799222d7!2sAv.%20Argentina%20575%2C%20Lima%2015082!5e0!3m2!1ses-419!2spe!4v1724789742712!5m2!1ses-419!2spe"
            style={{ border: 0, width: '100%', height: height }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" />
    )
}
