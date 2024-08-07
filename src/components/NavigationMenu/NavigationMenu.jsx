import React from "react";
import "./NavigationMenu.scss";
import PropTypes from "prop-types";

const NavigationMenuPropTypes = {
    authenticated: PropTypes.bool,
    showBackground: PropTypes.bool,
    showHeader: PropTypes.bool,
    showIcon: PropTypes.bool,
    showNavBar: PropTypes.bool,
    title: PropTypes.string,

    navbarHeight: PropTypes.number,
    onLeave: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    navigationMode: PropTypes.string,
    forceUpdate: PropTypes.bool,
    onEnter: PropTypes.func,
    onFocusLink: PropTypes.func,
    selectedProfile: PropTypes.object,
    isReactivation: PropTypes.bool,
    hideSignupButon: PropTypes.bool,
    affiliateLogo: PropTypes.string,
    loginClicked: PropTypes.func,
};

const NavigationMenu = ({
    authenticated,
    showBackground,
    showHeader,
    showIcon,
    showNavBar,
    title,

    navbarHeight,
    onLeave,
    onMouseEnter,
    onMouseLeave,
    navigationMode,
    forceUpdate,
    onEnter,
    onFocusLink,
    selectedProfile$,
    isReactivation$,
    hideSignupButon,
    affiliateLogo$,
    loginClicked,
}) => {

    return (
<div
    { authenticated && showBackground && showHeader && showIcon && showNavBar && title } as state"
    } as state"
>
    <nav
        *ngIf="state.showHeader"
        #navbar="focusGroup"
        focusGroup="navbar"
        [attr.data-test-state]="state.showBackground ? 'gradient' : 'transparent'"
        [leaveDirections]="['down']"
        [ngStyle]="{ height: navbarHeight + 'px' }"
        [ngClass]="state.showBackground ? 'title-background page black-blur' : ''"
        (onLeave)="onLeave()"
        (mouseenter)="onMouseEnter()"
        (mouseleave)="onMouseLeave()"
    >
        <!-- App Logo -->
        <div [class.logo-hide]="!state.showIcon" class="logo assets-logo"></div>

        <!-- Trick to disable TTS below-->
        <span id="disabled"></span>

        <!-- Menu -->
        <div
            *ngIf="navigationMode !== NavigationModes.Disabled && navigationMode !== NavigationModes.IconOnly"
            #navLinks="focusGroup"
            class="menu"
            focusGroup="navLinks"
            enterTo="activeRoute"
            [leaveDirections]="['down']"
            [class.hide]="!state.showNavBar"
            [class.flash-on]="forceUpdate"
            (onEnter)="onEnter()"
            data-test="top-menu"
        >
            <!-- Main Nav -->
            <a
                #homeLink="focusable"
                id="home-button"
                class="link link-underline"
                routerLinkActive="active"
                routerLink="/home"
                [attr.restore]="navbar?.focusPath()"
                [attr.role]="'menuitem'"
                (focus)="onFocusLink()"
            >
                <span class="shadow">{{ 'navigationMenu.home' | transloco | uppercase }}</span>
            </a>
            <a
                id="series-button"
                class="link link-underline"
                routerLinkActive="active"
                routerLink="/series"
                [attr.restore]="navbar?.focusPath()"
                [attr.role]="'menuitem'"
                (focus)="onFocusLink()"
            >
                <span class="shadow">{{ 'navigationMenu.series' | transloco | uppercase }}</span>
            </a>
            <a
                id="movies-button"
                class="link link-underline"
                routerLinkActive="active"
                routerLink="/movies"
                [attr.restore]="navbar?.focusPath()"
                [attr.role]="'menuitem'"
                (focus)="onFocusLink()"
            >
                <span class="shadow">{{ 'navigationMenu.movies' | transloco | uppercase }}</span>
            </a>
            <a
                *ngIf="state.authenticated"
                id="playlist-button"
                class="link link-underline"
                routerLinkActive="active"
                routerLink="/playlist"
                [attr.restore]="navbar?.focusPath()"
                [attr.role]="'menuitem'"
                (focus)="onFocusLink()"
            >
                <span class="shadow">{{ 'navigationMenu.playlist' | transloco | uppercase }}</span>
            </a>
            <a
                id="browse-button"
                class="link link-underline"
                routerLinkActive="active"
                routerLink="/browse"
                [attr.restore]="navbar?.focusPath()"
                [attr.role]="'menuitem'"
                (focus)="onFocusLink()"
            >
                <span class="shadow"><span class="icon-search"></span>{{ 'navigationMenu.browse' | transloco | uppercase }} </span>
            </a>

            <!-- User Account and Settings -->
            <div class="account-container">
                <a
                    *ngIf="state.authenticated && selectedProfile$ | async as selectedProfile"
                    id="profile-button"
                    class="profile-avatar"
                    routerLinkActive="active"
                    routerLink="/profiles/manage"
                    [attr.role]="'menuitem'"
                    [attr.restore]="navbar?.focusPath()"
                    [attr.aria-label]="'navigationMenu.profiles' | transloco"
                    (focus)="onFocusLink()"
                >
                    <span class="shadow"><app-profile-avatar [profile]="selectedProfile"></app-profile-avatar></span>
                </a>
                <a
                    *ngIf="!state.authenticated"
                    id="log-in-button"
                    class="link link-underline"
                    routerLink="/sign-in"
                    routerLinkActive="active"
                    [attr.role]="'menuitem'"
                    [attr.restore]="navbar?.focusPath()"
                    (click)="loginClicked($event)"
                    (focus)="onFocusLink()"
                >
                    <span class="shadow">{{ 'navigationMenu.login' | transloco | uppercase }}</span>
                </a>
                <span class="shadow">
                    <button
                        *ngIf="!state.authenticated && !hideSignupButon"
                        id="sign-up-button"
                        class="link"
                        focusKey="sign-up"
                        webtv-dynamic-width-button
                        routerLink="/sign-up"
                        routerLinkActive="active"
                        [attr.role]="'menuitem'"
                        [attr.restore]="navbar?.focusPath()"
                        (focus)="onFocusLink()"
                    >
                        {{
                            ((isReactivation$ | async) ? 'navigationMenu.reactivate' : 'navigationMenu.startFreeTrial')
                                | transloco
                                | uppercase
                        }}
                    </button>
                </span>
                <a
                    id="settings-button"
                    class="link link-underline icon settings"
                    routerLink="/settings"
                    routerLinkActive="active"
                    [attr.role]="'menuitem'"
                    [attr.aria-label]="'navigationMenu.settings' | transloco"
                    [attr.restore]="navbar?.focusPath()"
                    (focus)="onFocusLink()"
                >
                    <span class="shadow"><span class="settings icon-gear"></span></span>
                </a>
                <img *ngIf="affiliateLogo$ | async as affiliateLogo" [src]="affiliateLogo" />
            </div>
        </div>

        <!-- Title -->
        <div id="menutitle" class="large-title-color menu-large-title truncate-long-titles" *ngIf="state.title && !state.showNavBar">
            {{ state.title | transloco | titlecase }}
        </div>
    </nav>
</div>
                    );
};
