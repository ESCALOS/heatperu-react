import React, { useEffect, useRef, useState } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { Media } from '@/types';

interface PhotoGalleryProps {
    title: string;
    media: Media[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ title, media }) => {
    const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);
    const [galleryItems, setGalleryItems] = useState<{ src: string; width: number; height: number; alt?: string }[]>([]);

    useEffect(() => {
        const loadImages = async () => {
            const items = await Promise.all(
                media.map((item) =>
                    new Promise<{ src: string; width: number; height: number; alt?: string }>((resolve) => {
                        const img = new Image();
                        img.src = item.original_url;
                        img.onload = () => {
                            resolve({
                                src: item.original_url,
                                width: img.naturalWidth,
                                height: img.naturalHeight,
                                alt: title,
                            });
                        };
                    })
                )
            );

            setGalleryItems(items);
        };

        loadImages();
    }, [media]);

    useEffect(() => {
        if (galleryItems.length > 0) {
            const lightbox = new PhotoSwipeLightbox({
                dataSource: galleryItems,
                showHideAnimationType: 'zoom',
                pswpModule: () => import('photoswipe'),
            });

            lightboxRef.current = lightbox;
            lightbox.init();

            return () => {
                if (lightboxRef.current) {
                    lightboxRef.current.destroy();
                    lightboxRef.current = null;
                }
            };
        }
    }, [galleryItems]);

    const openGallery = (e: React.MouseEvent) => {
        e.preventDefault();
        if (lightboxRef.current) {
            lightboxRef.current.loadAndOpen(0); // Abrir la galería en la primera imagen
        }
    };

    return (
        <div onClick={openGallery} className='flex gap-4 h-52 md:h-80 cursor-zoom-in'>
            <div className='md:w-1/2'>
                <img src={media[0].original_url} alt={title} className='object-cover w-full h-full rounded-md' />
            </div>
            <div className="hidden w-1/2 grid-cols-2 grid-rows-2 gap-4 md:grid">
                {
                    media.slice(1, 5).map((image) =>
                        <div key={image.id}>
                            <img src={image.original_url} alt={title} className='object-cover w-full h-full rounded-md' />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PhotoGallery;
