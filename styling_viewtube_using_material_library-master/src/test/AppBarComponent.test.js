import ApplicationBar from "../components/ApplicationBar";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("App should have Appbar component", () => {
    act(() => {
        render(<ApplicationBar />, container);
    });
    
    const appBar = document.getElementsByClassName("MuiAppBar-root");
    
    expect(appBar.length).toEqual(1);
});

it("App should have ToolBar component", () => {
    act(() => {
        render(<ApplicationBar />, container);
    });
    const toolBar = document.getElementsByClassName("MuiToolbar-root");
    expect(toolBar.length).toEqual(1);
});

it("App should have IconButton component to show quick action using icon in top right of app", () => {
    act(() => {
        render(<ApplicationBar />, container);
    });
    const iconButton = document.getElementsByClassName("MuiIconButton-root");
    expect(iconButton.length).toBeGreaterThanOrEqual(1);
});