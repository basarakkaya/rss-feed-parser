import React, { Component } from "react";
import "./AddressBar.css";

function ErrorModal() {
  return (
    <div className="addressbar-error">
      <p className="addressbar-error-header">Invalid URL</p>
      <p className="addressbar-error-description">
        Your URL must have "http://" or "https://"
      </p>
    </div>
  );
}

class AddressBar extends Component {
  state = {
    feedUrl: "",
    error: false,
  };

  onInputChange = (e) => {
    this.setState({
      error: false,
      feedUrl: e.target.value,
    });
  };

  submit = () => {
    const { feedUrl } = this.state;
    const { onSubmit } = this.props;

    if (!this.validateUrl(feedUrl)) {
      this.setState({ error: true });
      return;
    }

    onSubmit(feedUrl);
  };

  validateUrl = (url) => {
    var pattern = new RegExp(
      "(https?:\\/\\/)" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", // fragment locator
      "i"
    );
    return !!pattern.test(url);
  };

  render() {
    const { feedUrl } = this.state;

    return (
      <div className="addressbar-container">
        <input
          value={feedUrl}
          onChange={this.onInputChange}
          className="addressbar-input"
        />
        <button
          onClick={this.submit}
          disabled={feedUrl === ""}
          className="addressbar-submit"
        >
          Fetch RSS
        </button>
        {this.state.error && <ErrorModal />}
      </div>
    );
  }
}

export default AddressBar;
