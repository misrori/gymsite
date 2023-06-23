document.addEventListener("DOMContentLoaded", function() {
  // Video data
  const videoData = [
    {
      "link": "https://www.youtube.com/embed/omuAtS7zOa0",
      "category": "core"
    },
    {
      "link": "https://www.youtube.com/embed/2ZbrqTZt1nY",
      "category": "back"
    },
    {
      "link": "https://www.youtube.com/embed/2_e4I-brfqs",
      "category": "core"
    },
    {
      "link": "https://www.youtube.com/embed/dBYjU7iBpck",
      "category": "full_body"
    }
  ];

  const videoContainer = document.getElementById("video-container");
  const categoryFilter = document.getElementById("category-filter");

  // Filter videos based on the selected category
  function filterVideos() {
    const selectedCategory = categoryFilter.value;
    let filteredVideos = [];

    if (selectedCategory === "all") {
      filteredVideos = videoData;
    } else {
      filteredVideos = videoData.filter(video => video.category === selectedCategory);
    }

    displayVideos(filteredVideos);
  }

  // Display all the filtered videos
  function displayVideos(videos) {
    videoContainer.innerHTML = "";

    videos.forEach((video, index) => {
      const videoIframe = document.createElement("iframe");
      videoIframe.src = video.link;
      videoIframe.setAttribute("allowfullscreen", "");
      videoIframe.setAttribute("frameborder", "0");
      videoIframe.setAttribute("height", "400px");
      videoIframe.setAttribute("width", "600px");

      const videoContainerWrapper = document.createElement("div");
      videoContainerWrapper.classList.add("video-container-wrapper");
      videoContainerWrapper.appendChild(videoIframe);

      videoContainer.appendChild(videoContainerWrapper);

      // Add an empty line after each video except for the last one
      if (index !== videos.length - 1) {
        videoContainer.appendChild(document.createElement("br"));
      }
    });
  }

  // Event listener for category filter change
  categoryFilter.addEventListener("change", filterVideos);

  // Initial video display
  filterVideos();
});
