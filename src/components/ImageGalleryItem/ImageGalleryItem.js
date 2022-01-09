import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ src, photoDescr, onModalOpen, largeImageUrl }) {
    return (
        <img
            className={s.image}
            src={src}
            alt={photoDescr}
            onClick={() => onModalOpen(largeImageUrl)}
        />
    );
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    photoDescr: PropTypes.string.isRequired,
    onModalOpen: PropTypes.func.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
