import React from "react";
import classes from "./UserBar.module.css";
import axios from "axios";
import {UserBar} from "./UserBar";
import {Pages} from "./Pages/Pages";
import loading from './loading.svg';
import {fetchUser} from "../../Api/api";

export class UserBarClass extends React.Component {
    getData(page, count) {
        this.props.fetching();
        fetchUser(page,count).then(res => {
            this.props.fetching();
            this.props.setUsers(res.items, res.totalCount);
        })

    }
    componentDidMount() {
        this.getData(this.props.currentPage, this.props.pageSize);
    }

    getPages() {
        let pages = [];
        for (let i = 0; i < Math.ceil(this.props.totalCount / this.props.pageSize); i++) {
            pages.push(i + 1);
        }
        return pages;
    }

    updatePages(page) {
        this.props.setPage(page);
        this.getData(page, this.props.pageSize);

    }

    render() {
        return (<>
                {
                    this.props.isFetching
                        ?
                        <img className={classes.load} src={loading}/>
                        :
                        <div className={classes.userBar}>
                            <div className={classes.count}>
                                <Pages pages={this.getPages()} updatePages={this.updatePages.bind(this)}
                                       currentPage={this.props.currentPage}/>
                            </div>
                            <UserBar users={this.props.users} follow={this.props.follow}/>
                        </div>
                }
            </>
        );
    }
}