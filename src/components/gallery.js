import React from 'react';
import {
    createStyles,
    Grid,
    Typography,
    withStyles,
} from '@material-ui/core';
import GalleryImage from './gallery_image';

const styles = (theme) => createStyles({
    imageContainer: {
        margin: '0 2em'
    },
});

const imageRefs = [
    "charles-REtZm_TkolU-unsplash.jpg",
    "devon-hawkins-OSXZtnTyBc8-unsplash.jpg",
    "toshi-K5pLGYJMHKk-unsplash.jpg"
];

class ImageGallery extends React.Component {

    render() {
        console.log('PROPS', this.props);
        const classes = this.props.classes;
        return (
            <Grid container spacing={8} className={ classes.imageContainer }>
                { imageRefs.map((ref, index) => {
                    return <GalleryImage key={`${ref}-${index}`} filename={ref} />
                })}
            </Grid>
        )
    }
}

export default withStyles(styles)(ImageGallery);