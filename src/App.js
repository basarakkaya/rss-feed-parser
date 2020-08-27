import React, { Component } from "react";
import axios from "axios";
import AddressBar from "./components/AddressBar/AddressBar";
import PagedView from "./components/PagedView/PagedView";
class App extends Component {
  state = {
    feedContent: [],
    feedDescription: "",
    feedTitle: "",
    itemPerPage: 5,
    error: false,
    loading: false,
  };

  isUrlValid = () => {};

  submit = async (feedUrl) => {
    this.setState({
      loading: true,
      feedContent: [],
      feedDescription: "",
      feedTitle: "",
    });

    axios
      .get(`/feed?url=${feedUrl}`)
      .then((res) => {
        const rssData = res.data.data.rss.channel[0];

        this.setState({
          feedTitle: rssData.title[0],
          feedDescription: rssData.description[0],
          feedContent: rssData.item,
          error: false,
        });
      })
      .catch(() => {
        this.setState({
          error: true,
        });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const {
      feedContent,
      feedDescription,
      feedTitle,
      loading,
      itemPerPage,
      error,
    } = this.state;
    return (
      <div>
        <AddressBar onSubmit={this.submit} />
        <div style={{ paddingTop: 64, textAlign: "center" }}>
          {loading && <p>Loading...</p>}
          {!loading && feedContent && (
            <>
              {feedContent.length > 0 && (
                <PagedView
                  data={feedContent}
                  itemPerPage={itemPerPage}
                  title={feedTitle}
                  description={feedDescription}
                />
              )}
              {feedContent.length === 0 && (
                <p>No Content - Please make a search</p>
              )}
            </>
          )}
          {!loading && error && <p> URL may not contain any RSS!</p>}
        </div>
      </div>
    );
  }
}

export default App;
