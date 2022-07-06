import React from "react";
import styled from "styled-components";
import Icon from "../component/Icon";
import Input from "../component/Input";

export default function Header(props) {

    // Need to write component code for Container using styled component by replacing `null` value
    const Container = styled.div`
        display: flex;
        justify-content: start;
        margin-right: 200px;
        margin-left: 200px;
    `;

    // Need to write component code for Container, Wrapper, Menu, SearchBar, QuickIcon, LogoTitle, StyledInput, using styled component by replacing `null` value
    const Wrapper = styled.div`
        display: flex;
        justify-content: between;
        background-color: #fff
    `;

    // Need to write component code for Menu using styled component by replacing `null` value
    const Menu = styled.div`
        text-align: left
    `;

    // Need to write component code for SearchBar using styled component by replacing `null` value
    const SearchBar = styled.div`
        background-color: #000;
    `;

    // Need to write component code for QuickIcon using styled component by replacing `null` value
    const QuickIcon = styled.div`
        vertical-align: middle;
    `;

    // Need to write component code for LogoTitle using styled component by replacing `null` value
    const LogoTitle = styled.h4`
        color: #fff;
    `;

    // Need to write component code for StyledInput using styled component by replacing `null` value
    const StyledInput = styled.div`
        color: white;
    `;

    return (
        <Container>
            <Wrapper>
                <Menu>
                    <LogoTitle>ViewTube</LogoTitle>
                </Menu>
                <SearchBar>
                    <StyledInput className={"inputWithIcon"}>
                        <Input
                            type="text"
                            placeholder="Search"
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        />
                    </StyledInput>
                    <Icon className="fa fa-search" />
                    <Icon className="fa fa-microphone" />
                </SearchBar>
                <QuickIcon>
                    <Icon onClick={props.toggleTheme} className="fa fa-adjust" />
                    <Icon className="fa fa-bell" />
                    <Icon className="fa fa-th" />
                    <Icon className="fa fa-user" />
                </QuickIcon>
            </Wrapper>
        </Container>
    )
}