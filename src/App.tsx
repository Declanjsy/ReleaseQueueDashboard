import React, { useState } from "react";
import Tile from "./display/tile";
import "./App.css";
import Column from "./display/column";
import BottomBar from "./display/bottomBar";
import * as Bowser from "bowser";
import { createContext } from "react";
export interface IPageContext {
	pageSetting: [number, (pageNum: number) => void];
}

export const PageContext = createContext<IPageContext>({ pageSetting: [0, () => {}] });

function App() {
	const [page, setPage] = useState<number>(0);
	const switchPage = (pageNum: number): void => setPage(pageNum);

	const tile = (
		<Tile title="Release 37.30492 Broken Luke" description="Luke has broken the ui again, it's time to talk about Luke"></Tile>
	);
	const pages = [
		<Column columnTitle={"Pending Releases"} tiles={[tile, tile, tile, tile]}></Column>,
		<Column columnTitle={"Past Releases"} tiles={[tile]}></Column>,
		<Column columnTitle={"Test Releases"} tiles={[tile]}></Column>
	];

	const mobile = (
		<div className="App">
			<div className="App-header">{pages[page]}</div>
			<PageContext.Provider value={{ pageSetting: [page, switchPage] }}>
				<header className="App-header">
					<BottomBar />
				</header>
			</PageContext.Provider>
		</div>
	);

	const notMobile = (
		<div className="App">
			
			{pages.map(page=>{
				return(
				<div className="App-header">
					{page}
				</div>)
			})}
		</div>
	);
	if(Bowser.getParser(window.navigator.userAgent).getPlatform().type === "mobile"){
		return mobile;
	}

	return notMobile;
}

export default App;
