import { ReactNode } from 'react'

type Props = {
    title: string;
    titleHeight?: number;
    imgPath: string;
    footer: ReactNode
}

function Card({ title, titleHeight = 30, imgPath, footer }: Props) {
    return (
        <div
            className={`flex flex-col items-center gap-4 p-4 text-center border`}
            style={{
                height: `${362 + titleHeight}px`,
                width: '294px'
            }}
        >
            <h2
                className={`content-center inline-block overflow-hidden font-semibold text-sm`}
                style={{ height: `${titleHeight}px` }}
            >
                {title}
            </h2>
            {imgPath ? (
                <img
                    src={imgPath}
                    alt={title}
                    className="object-cover w-64 h-64 rounded-lg"
                />
            ) : (
                <p className="flex items-center justify-center w-64 h-64 bg-gray-100">
                    Imagen no disponible
                </p>
            )}
            {footer}
        </div>
    )
}

export default Card
