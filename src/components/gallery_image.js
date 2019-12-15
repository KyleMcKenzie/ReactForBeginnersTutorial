import React from 'react';
import {
    createStyles,
    Grid,
    Typography,
    withStyles,
} from '@material-ui/core';

const styles = (theme) => createStyles({
    galleryImage: {
        margin: "0 auto",
    },
});

class GalleryImage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)

        return (
            <Grid item>
                <img src={this.props.filename} alt="Image not available" height="400px"/>
            </Grid>
        )
    }
}

export default withStyles(styles)(GalleryImage);