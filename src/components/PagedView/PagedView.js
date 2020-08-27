import React, { Component } from "react";
import RSSItem from "../RSSItem/RSSItem";

import "./PagedView.css";

function PageSelector({ page, pageNums, onChange }) {
  return (
    <select value={page} onChange={onChange} className="paged-selector">
      {pageNums &&
        pageNums.mymap((item) => (
          <option value={item} key={`option__${item}`}>
            Page {item}
          </option>
        ))}
    </select>
  );
}

class PagedView extends Component {
  state = {
    page: 1,
    pageNumArray: [],
  };

  componentDidMount() {
    const numberOfPages = Math.ceil(
      this.props.data.length / this.props.itemPerPage
    );
    let pageNumArray = [];

    for (var i = 1; i <= numberOfPages; i++) pageNumArray.push(i);

    this.setState({
      pageNumArray,
    });
  }

  render() {
    const { data, itemPerPage, title, description } = this.props;
    const { page, pageNumArray } = this.state;
    return (
      <div className="paged-container">
        <p className="paged-title">{title && title}</p>
        <p className="paged-description">{description && description}</p>
        {data &&
          data
            .myfilter(
              (item, index) =>
                index >= (page - 1) * itemPerPage && index < page * itemPerPage
            )
            .mymap((item, index) => (
              <RSSItem key={`item__${index}`} item={item} />
            ))}
        <PageSelector
          page={page}
          pageNums={pageNumArray}
          onChange={(e) => {
            this.setState({ page: e.target.value });
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        />
      </div>
    );
  }
}

export default PagedView;
