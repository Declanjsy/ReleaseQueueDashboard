
import React from "react";
import { Button, Card, CardContent, Typography, CardActions } from '@material-ui/core';
import { useState, ReactElement } from "react";
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";

export interface ITileProps{
    title:string;
    description: string;
}

const MatTile = styled(Card)`
    text-align:left;
`

const TypeStyles = makeStyles({
    title: {
        fontSize:24
    },
    subheading:{
        fontSize:20
    },
    description:{
        fontSize:18,
    },
    button: {
        fontSize:18,
        width:"100%",
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
    },
    div:{
        paddingBottom:10
    }
});

export default function Tile(props:ITileProps):ReactElement{
    const [titleText, setTileText] = useState<string>(props.title);
    const [priority, setPriority] = useState<number>(0);
    const [done, setDone] = useState<boolean>(false);
    const styles = TypeStyles();

    return (
       <div className={styles.div}>
           <MatTile raised={true}>
                <CardContent>
                    <Typography className={styles.title} >
                        {titleText}
                    </Typography>
                    <Typography className={styles.description} >
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className={styles.button} variant="contained" color="primary">
                        Done
                    </Button>
                </CardActions>
           </MatTile>
       </div>
    )
}