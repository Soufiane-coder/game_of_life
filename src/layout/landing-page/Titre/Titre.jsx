import React from "react";
import { ReactComponent as GamingDraw } from "../../../assets/undraw/undraw_gaming_re_cma2.svg";
import { ReactComponent as GamingConsoleClipArt } from "../../../assets/clipart/gaming-console-clipart.svg";
import { ReactComponent as SheetClipArt } from "../../../assets/clipart/sheet.svg";
import GameFieldButton from "../../../components/GameFieldButton/GameFieldButton";
import "./Titre.scss";
import Fade from "react-reveal/Fade";

const Titre = () => (
    <div className="header-title">
        <div className="introduction-text">
            <Fade left duration={1000}>
                <h1 className="introduction-text__title">
                    <span className="introduction-text__title--color-yellow">Game of </span>
                    <span className="introduction-text__title--color-green">Life</span>
                    <GamingConsoleClipArt className="introduction-text__gaming-console" />
                    <SheetClipArt className="introduction-text__sheet" />
                </h1>
            </Fade>
            <Fade bottom>
                <p className="quote">
                    The secret of your
                    <span className="color-green"> future</span> is
                    <span className="color-blue"> hidden</span> in your daily
                    <span className="color-red"> routine.</span>
                    <span className="quote__quoter">― Mike Murdock</span>
                </p>
            </Fade>
            <GameFieldButton />
        </div>
        <GamingDraw className="game-draw" />
    </div >
);
export default Titre;
