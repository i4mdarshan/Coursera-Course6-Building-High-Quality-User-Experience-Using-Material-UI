import FilterVideos from "../components/FilterVideos";
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

it("should have Chip component to show different category of video", () => {
    act(() => {
        render(<FilterVideos />, container);
    });
    
    const moodIcons = document.getElementsByClassName("MuiChip-root");
    
    expect(moodIcons.length).toEqual(6);
});