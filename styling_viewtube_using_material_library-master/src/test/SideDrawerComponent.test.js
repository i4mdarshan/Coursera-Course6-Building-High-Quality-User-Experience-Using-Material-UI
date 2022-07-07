import SideDrawer from "../components/SideDrawer";
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

it("App should have Side Drawer component which opens as side drawer in app", () => {
    act(() => {
        render(<SideDrawer openSideDrawer={true} toggleDrawer={jest.fn} />, container);
    });
    
    const sideDrawer = document.getElementsByClassName("MuiDrawer-paper");
    
    expect(sideDrawer.length).toEqual(1);
});

it("App should have List component to listout all menu button", () => {
    act(() => {
        render(<SideDrawer openSideDrawer={true} toggleDrawer={jest.fn} />, container);
    });
    const sideDrawer = document.getElementsByClassName("MuiList-root");
    expect(sideDrawer.length).toEqual(1);
});

it("App should have Button component to make link clickable", () => {
    act(() => {
        render(<SideDrawer openSideDrawer={true} toggleDrawer={jest.fn} />, container);
    });
    const button = document.getElementsByClassName("MuiButton-root");
    expect(button.length).toBeGreaterThanOrEqual(1);
});