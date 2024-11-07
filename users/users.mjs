import {html} from './template.mjs';
import { app, watchlist, handleAttrChange, componentInit } from './model.mjs';
import { getElementClass } from "../CustomElement.mjs";

const stylePaths = ['globals.css'];

const Users = getElementClass('User', html, app, watchlist, handleAttrChange, componentInit, stylePaths);

customElements.define('element-users', Users);
