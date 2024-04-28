// @ts-ignore
import {UserBar} from "./UserBar.tsx";
// @ts-ignore
import loading from './loading.svg';
import * as React from "react";
// @ts-ignore
import {Pages} from "./Pages/Pages.tsx";

// @ts-ignore
import classes from './UserBar.module.css';

interface propsType {
    users: Array<any>,
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
    followProgress: boolean,
    isAuth: boolean,
    follow: (id: number)=>void,
    followThunkCreator: (followed: boolean, id: number)=>void,
    getUsersThunkCreator: (page: number, count: number)=>void,
    setPage: (page: number)=>void
}

export class UserBarClass extends React.Component<propsType,null> {
    getData(page: number, count: number): void {
        this.props.getUsersThunkCreator(page,count);
    }
    componentDidMount():void {
        this.getData(this.props.currentPage, this.props.pageSize);
    }

    getPages():Array<number> {
        let pages = [];
        for (let i = 0; i < Math.ceil(this.props.totalCount / this.props.pageSize); i++) {
            pages.push(i + 1);
        }
        return pages;
    }

    updatePages(page: number):void {
        this.props.setPage(page);
        this.getData(page, this.props.pageSize);

    }

    render() {
        return (<>
                {
                    this.props.isFetching ?
                        <img className={classes.load} src={loading}/>
                        :
                        <div className={classes.userBar}>
                            <div className={classes.count}>
                                <Pages pages={this.getPages()} updatePages={this.updatePages.bind(this)}
                                       currentPage={this.props.currentPage}/>
                            </div>
                            <UserBar followThunkCreator={this.props.followThunkCreator} followProgress={this.props.followProgress} users={this.props.users} follow={this.props.follow}/>
                        </div>
                }
            </>
        );

    }
}