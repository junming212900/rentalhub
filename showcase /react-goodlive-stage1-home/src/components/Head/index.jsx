import React from "react"
import "./style.less"

export default class Head extends React.Component {
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <span>Salt Lake city </span>
                    <i className="icon-angle-down"></i>
                </div>
                <div className="home-header-right float-right">
                    <i className="iconfont icon-car"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input />
                    </div>
                </div>
            </div>
        )
    }
}