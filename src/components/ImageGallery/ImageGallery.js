import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

function ImageGallery({ photos, onModalOpen }) {
    return (
        <ul className={s.gallery}>
            {photos.map(
                ({
                    id,
                    webformatURL: src,
                    largeImageURL: largeImageUrl,
                    tags: photoDescr,
                }) => (
                    <li className={s.galleryItem} key={id}>
                        <ImageGalleryItem
                            src={src}
                            photoDescr={photoDescr}
                            onModalOpen={onModalOpen}
                            largeImageUrl={largeImageUrl}
                        />
                    </li>
                ),
            )}
        </ul>
    );
}

ImageGallery.propTypes = {
    photos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};

export default ImageGallery;
