import "../styles/cardField.css";
import React, { Component } from "react";
import Modal from "react-modal";

interface Datafull {
  datas: Data;
}

interface Data {
  flags: Flags;
  name: Name;
  id: string;
  title: string;
  body: string;
  key: number;
  i: number;
}

interface Name {
  common: string;
  official: string;
}
interface Flags {
  png: string;
}

export class CardFieldAPI extends React.Component {
  state = {
    filters: "",
    data: Array<Data>(),
    isloading: false,
    dataIndex: 0,
    dataFull: Array<Data>(),
  };

  async componentDidMount() {
    try {
      const url = "https://restcountries.com/v3.1/all";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({ data: data.splice(0, 10), isloading: true });
    } catch {
      console.log("error");
    }
  }

  onCloseModal = () => {
    this.setState({ dataIndex: null });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filters: e.target.value });
    console.log(e.target.value);
  };

  render() {
    const { filters, data, isloading } = this.state;
    const filteredData = data.filter((card) => {
      console.log(filters);
      return card.name.common.toLowerCase().includes(filters.toLowerCase());
    });
    return (
      <div>
        <div className="header">
          <input
            type="text"
            className="searchPlace"
            placeholder="Search..."
            onChange={this.handleChange}
          />
          <button className="search">search</button>
        </div>
        {!isloading ? (
          <div>Loading</div>
        ) : (
          <div className="page">
            {filteredData.map((card) => (
              <div key={card.name.common}>
                <div className="card">
                  <div className="titile">{card.name.common}</div>
                  <img className="flagImg" src={card.flags.png} alt="Flag" />
                  <a>
                    <button
                      onClick={() => {
                        this.setState({ dataIndex: 1 });
                        this.setState({ dataFull: card });
                      }}
                    >
                      more... #
                    </button>
                  </a>
                </div>
              </div>
            ))}
            <Modal
              isOpen={!!this.state.dataIndex}
              onRequestClose={this.onCloseModal}
              ariaHideApp={false}
            >
              <>
                {this.state.dataFull[this.state.dataIndex] && (
                  <>
                    {this.state.dataFull[this.state.dataIndex].name.common}
                    {this.state.dataFull[this.state.dataIndex].flags.png}
                  </>
                )}
              </>
            </Modal>
          </div>
        )}
      </div>
    );
  }
}
