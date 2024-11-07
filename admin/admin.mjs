import {html} from './template.mjs';
import { app, watchlist, handleAttrChange, componentInit } from './model.mjs';
import { getElementClass } from "../CustomElement.mjs";

const stylePaths = ['globals.css'];

const Admin = getElementClass('Admin', html, app, watchlist, handleAttrChange, componentInit, stylePaths);

customElements.define('element-admin', Admin);
