import Video from "../components/Video";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';

const videos = [
    {
        "kind": "youtube#video",
        "etag": "_KtPFxHuR8NueYfhBOKIMw28GYo",
        "id": "ByOPqVzGvJw",
        "snippet": {
          "publishedAt": "2020-12-26T17:30:09Z",
          "channelId": "UCqrILQNl5Ed9Dz6CGMyvMTQ",
          "title": "My Advice for New Programmers (Things I Wish I Knew)",
          "description": "Want to master React JS and land a job 👉 https://CleverProgrammer.com/pwj\n\nIn this video I talk about what you need to master to get past being a beginner developer.\n\n#coding #advice #programming",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ByOPqVzGvJw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ByOPqVzGvJw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ByOPqVzGvJw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ByOPqVzGvJw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ByOPqVzGvJw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Clever Programmer",
          "tags": [
            "Javascript",
            "Reactjs",
            "Coding",
            "Programming",
            "Developer",
            "Softwaredeveloper",
            "Advice",
            "Tips",
            "Coding tips",
            "Programming advice",
            "Developer advice",
            "Python",
            "Pythonprogramming",
            "Ruby",
            "Vuejs",
            "Angular",
            "Web developer"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "defaultLanguage": "en",
          "localized": {
            "title": "My Advice for New Programmers (Things I Wish I Knew)",
            "description": "Want to master React JS and land a job 👉 https://CleverProgrammer.com/pwj\n\nIn this video I talk about what you need to master to get past being a beginner developer.\n\n#coding #advice #programming"
          },
          "defaultAudioLanguage": "en"
        },
        "contentDetails": {
          "duration": "PT3M57S",
          "dimension": "2d",
          "definition": "hd",
          "caption": "false",
          "licensedContent": true,
          "contentRating": {},
          "projection": "rectangular"
        },
        "statistics": {
          "viewCount": "48782",
          "likeCount": "4606",
          "dislikeCount": "55",
          "favoriteCount": "0",
          "commentCount": "224"
        }
      },
      {
        "kind": "youtube#video",
        "etag": "d0eyfJnyWj-XdLjS9BTB_fXd6QU",
        "id": "NphjQt2_BPA",
        "snippet": {
          "publishedAt": "2021-02-07T00:32:17Z",
          "channelId": "UC1MuQrO6KP7tOtNWZUFoTZA",
          "title": "Hello Web app site using RubyMine",
          "description": "This is a Ruby web application for Hello Web app site using RubyMine IDE which print current time",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/NphjQt2_BPA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/NphjQt2_BPA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/NphjQt2_BPA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/NphjQt2_BPA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/NphjQt2_BPA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "LearnWithPayal",
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Hello Web app site using RubyMine",
            "description": "This is a Ruby web application for Hello Web app site using RubyMine IDE which print current time"
          },
          "defaultAudioLanguage": "en"
        },
        "contentDetails": {
          "duration": "PT10M49S",
          "dimension": "2d",
          "definition": "hd",
          "caption": "false",
          "licensedContent": false,
          "contentRating": {},
          "projection": "rectangular"
        },
        "statistics": {
          "viewCount": "16",
          "likeCount": "0",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }
]

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

it("should have Card component to display Video Items", () => {
    act(() => {
        render(<Video videoDetails={videos[0]}/>, container);
    });
    
    const videoCardItems = document.getElementsByClassName("MuiCard-root");
    expect(videoCardItems.length).toEqual(1);

});

it("should have CardMedia component to display Video thumbnail in video card", () => {
    
    act(() => {
        render(<Video videoDetails={videos[0]}/>, container);
    });
    
    const cardMediaItems = document.getElementsByClassName("MuiCardMedia-root");
    expect(cardMediaItems.length).toEqual(1);

});

it("should have Typography to show video title and description in card", () => {
    act(() => {
        render(<Video videoDetails={videos[0]}/>, container);
    });
    
    const typographyItems = document.getElementsByClassName("MuiTypography-root");
    expect(typographyItems.length).toBeGreaterThanOrEqual(1);
})
