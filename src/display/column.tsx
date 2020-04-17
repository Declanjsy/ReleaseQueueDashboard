import { ReactElement, useState } from "react";
import { Paper, makeStyles, createStyles, Theme } from "@material-ui/core";
import React from "react";
import * as Bowser from "bowser";

export interface IColumnProps {
	tiles: ReactElement[];
	columnTitle: string;
	background:string
}

export interface IStyle{
	visible:boolean,
	background:string
}

const columnStyle = makeStyles<Theme,IStyle>((theme:Theme) => 
	({
		root:styleProps=>({
			display: styleProps.visible ? "flex" : "none",
			flexDirection:  "column",
			marginLeft:"2.5%",
			height: 900,
			width: Bowser.parse(window.navigator.userAgent).platform.type === "mobile" ? "95%" : "95%",
			backgroundColor:styleProps.background
		}),
		paper: ()=>({
			paddingLeft: "1%",
			paddingRight: "1%",
			paddingTop: "1%",
			overflow: "auto",
			background: "#00b3ff"
		}),
		p: ()=>({
			textAlign: "left",
			color: "#636363",
			margin: 5
		})
	})
);

export default function Column(props: IColumnProps) {
	const [tiles, setTiles] = useState<ReactElement[]>(props.tiles);
	const [visible, setVisible] = useState<boolean>(true);
	const styleProps: IStyle = {
		visible:visible,
		background:props.background
	}
	const style = columnStyle(styleProps);
	return (
		<div className={style.root}>
			<p className={style.p}>{props.columnTitle}</p>
			<Paper className={style.paper} elevation={3}>
				{tiles}
			</Paper>
		</div>
	);
}
