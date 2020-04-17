import { makeStyles } from "@material-ui/core/styles";
import { ReactElement, useContext } from "react";
import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DoneIcon from '@material-ui/icons/Done';
import { PageContext, IPageContext } from "../App";

const useStyles = makeStyles({
	root: {
		flexGrow: 1
	},
	appBar: {
		top: "auto",
		bottom: 0,
		backgroundColor: "#b8d3ff"
	},
	iconDiv: {
		width: "33%"
	}
});

export default function BottomBar(): ReactElement {
	const style = useStyles();
	const { pageSetting } = useContext<IPageContext>(PageContext);
	const switchPage = pageSetting[1];
	return (
		<div className={style.root}>
			<AppBar className={style.appBar}>
				<Toolbar>
					<div className={style.iconDiv}>
						<IconButton
							onClick={() => {
								switchPage(0);
							}}
							edge="start"
							aria-label="menu">
							<MenuIcon fontSize="large"/>
						</IconButton>
					</div>
					<div className={style.iconDiv}>
						<IconButton
							onClick={() => {
								switchPage(1);
							}}
							edge="start"
							aria-label="menu">
							<DoneIcon fontSize="large"/>
						</IconButton>
					</div>
					<div className={style.iconDiv}>
						<IconButton
							onClick={() => {
								switchPage(2);
							}}
							edge="start"
							aria-label="menu">
							<DoneIcon fontSize="large"/>
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
