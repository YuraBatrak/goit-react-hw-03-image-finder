import { Component } from "react";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchQuery: "",
  };

  handleChange = (e) => this.setState({ searchQuery: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();

    const { searchQuery } = this.state;
    const { onSubmit } = this.props;

    onSubmit(searchQuery);
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <header className={s.searchBar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.btn}>
            <span className={s.btnLabel}>Search</span>
          </button>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            required
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
