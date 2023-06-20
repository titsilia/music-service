import React from 'react';
import TrackTitle from './track/track-title';
import TrackImage from './track/track-image';
import Author from './track/author';
import Album from './track/album';
import TrackTime from './track/track-time';

import SkelAuthor from './skeleton/skel-author';
import SkelImage from './skeleton/skel-image';
import SkelTitle from './skeleton/skel-title';

const { useState, useEffect } = React;

function Main() {
    return (
        <div className='main'>
            <Nav />
            <CenterBlock />
            <SlideBar />
        </div>
    );
}

export default Main



function Nav() {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => setVisible(!visible);

    return (
        <nav className='main__nav nav'>
            <div className='nav__logo logo'>
                <img className='logo__image' src="img/logo.png" alt="logo" />
            </div>
            <div className='nav__burger burger' onClick={toggleVisibility}>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
            </div>

            { visible && (
                <NavMenu />
            )}
            
        </nav>
    );
};

function NavMenu() {
    return (
        <div className="nav__menu menu">
            <ul className="menu__list">
                <ul className="menu__item"><a href="http://" className="menu__link">Главное</a></ul>
                <ul className="menu__item"><a href="http://" className="menu__link">Мой плейлист</a></ul>
                <ul className="menu__item"><a href="http://" className="menu__link">Войти</a></ul>
            </ul>
        </div>
    );
};

function CenterBlock() {
    const [visibleFilter, setVisibleFilter] = useState(null);
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => setIsActive(!isActive);

    const toggleVisibilityFilter = (filter) => setVisibleFilter(visibleFilter === filter ? null : filter);

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const timerId = setTimeout(() => {
            setIsLoading(false)
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    });

    return (
        <div className="main__centerblock centerblock">

            <div className="centerblock__search search">
                <svg className="search__svg">
                    <use href="img/icon/sprite.svg#icon-search"></use>
                </svg>
                <input className="search__text" type="search" placeholder="Поиск" name="search"></input>
            </div>

            <h2 className="centerblock__h2">Треки</h2>

            <div className="centerblock__filter filter">
                <div className="filter__title">Искать по:</div>
                <div className='filter__container-btn'>
                        {visibleFilter === "author" && <VisibleAuthor />}
                        {visibleFilter === "year" && <VisibleYear />}
                        {visibleFilter === "genre" && <VisibleGenre />}
                    <div className={isActive ? "filter__button button-author  _btn-text btn_active" : "filter__button button-author  _btn-text"} onClick={() => {toggleVisibilityFilter("author"), toggleActive}}>исполнителю 
                        
                        
                    </div>

                    <div className="filter__button button-year  _btn-text" onClick={() => toggleVisibilityFilter("year")}>году выпуска 
                        
                    </div>

                    <div className="filter__button button-genre  _btn-text" onClick={() => toggleVisibilityFilter("genre")}>жанру 
                        
                    </div>
                </div>
            </div>

            <div className="centerblock__content">
                <div className="content__title playlist-title">
                    <div className="playlist-title__col col01">Трек</div>
                    <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                    <div className="playlist-title__col col03">АЛЬБОМ</div>
                    <div className="playlist-title__col col04">
                        <svg className="playlist-title__svg" alt="time">
                            <use href="img/icon/sprite.svg#icon-watch"></use>
                        </svg>
                    </div>
                </div>

                <div className="content__playlist playlist">
                    {
                        isLoading
                        ?   <>
                                <SkelRenderMain />
                                <SkelRenderMain />
                                <SkelRenderMain />
                                <SkelRenderMain />
                                <SkelRenderMain />
                                <SkelRenderMain />
                                <SkelRenderMain />
                                <SkelRenderMain />
                                <SkelRenderMain />
                                <SkelRenderMain />
                                <SkelRenderMain />
                            </>
                        :
                            <>
                                <PlaylistItem playlist_title="Guilt" playlist_author="Nero" playlist_album="Welcome Reality" playlist_time="4:44"/>
                                <PlaylistItem playlist_title="Elektro" playlist_author="Dynoro, Outwork, Mr. Gee" playlist_album="Elektro" playlist_time="2:22"/>
                                <PlaylistItem playlist_title="I’m Fire" playlist_author="Ali Bakgor" playlist_album="I’m Fire" playlist_time="2:22"/>
                                <PlaylistItem playlist_title="Non Stop" playlist_author="Стоункат, Psychopath" playlist_album="Non Stop" playlist_time="4:12"/>
                                <PlaylistItem playlist_title="Run Run" playlist_author="Jaded, Will Clarke, AR/CO" playlist_album="Run Run" playlist_time="2:54"/>
                                <PlaylistItem playlist_title="Eyes on Fire" playlist_author="Blue Foundation, Zeds Dead" playlist_album="Eyes on Fire" playlist_time="5:20"/>
                                <PlaylistItem playlist_title="Mucho Bien" playlist_author="HYBIT, Mr. Black, Offer Nissim, Hi Profile" playlist_album="Mucho Bien" playlist_time="3:41"/>
                                <PlaylistItem playlist_title="Knives n Cherries" playlist_author="minthaze" playlist_album="Captivating" playlist_time="1:48"/>
                                <PlaylistItem playlist_title="How Deep Is Your Love" playlist_author="Calvin Harris, Disciples" playlist_album="How Deep Is Your Love" playlist_time="3:32"/>
                                <PlaylistItem playlist_title="Morena" playlist_author="Tom Boxer" playlist_album="Soundz Made in Romania" playlist_time="3:36"/>
                                <PlaylistItem playlist_title="Guilt" playlist_author="Dynoro" playlist_album="Welcome" playlist_time="0"/>
                            </>
                    
                    }
                </div>
            </div>
        </div>
    );
}

function VisibleAuthor() {
    return( 
        <>
            <div className='filter__dropdown_ad'>
                <div className="filter__dropdown filter__dropdown_author">
                    <p className="filter__dropdown_text">Michael Jackson</p>
                    <p className="filter__dropdown_text">Frank Sinatra</p>
                    <p className="filter__dropdown_text">Calvin Harris</p>
                    <p className="filter__dropdown_text">Zhu</p>
                    <p className="filter__dropdown_text">Arctic Monkeys</p>
                    <p className="filter__dropdown_text">Calvin Harris</p>
                    <p className="filter__dropdown_text">Zhu</p>
                </div>
            </div>
        </>
     );
}
function VisibleYear() {
    return( 
        <div className="filter__dropdown filter__dropdown_year">
            <p className="filter__dropdown_text">2023</p>
            <p className="filter__dropdown_text">2022</p>
            <p className="filter__dropdown_text">2021</p>
            <p className="filter__dropdown_text">2020</p>
            <p className="filter__dropdown_text">2019</p>
        </div>
     );
}
function VisibleGenre() {
    return( 
        <div className="filter__dropdown filter__dropdown_genre">
            <p className="filter__dropdown_text">Jazz</p>
            <p className="filter__dropdown_text">Rap</p>
            <p className="filter__dropdown_text">Phonk</p>
            <p className="filter__dropdown_text">Hyperpop</p>
        </div>
     );
}

function SkelRenderMain() {
    return(
        <div className="playlist__item">

            <div className="playlist__track track">
                <div className="track__title">
                    <SkelImage />
                    <SkelTitle />
                </div>

                <SkelAuthor />
                <SkelTitle />

            </div>

        </div>
    );
}

function PlaylistItem(props) {
    const {playlist_title, playlist_author, playlist_album, playlist_time} = props;
    return(
        <div className="playlist__item">

            <div className="playlist__track track">

                <div className="track__title">
                    <TrackImage />
                    <TrackTitle title={playlist_title} />
                </div>

                <Author author={playlist_author}/>
                <Album album={playlist_album} />
                <TrackTime time={playlist_time}/>
            </div>

        </div>
    );
}


function SlideBar() {
    return (
        <div className="main__sidebar sidebar">
            <SidebarPersonal name="Sergey.Ivanov"/>
            <div className="sidebar__avatar">

            </div>

            <div className="sidebar__block">
                <div className="sidebar__list">
                    <SidebarItem />
                    <SidebarItem />
                    <SidebarItem />
                </div>
            </div>
        </div>
    );
}

function SidebarPersonal({name}) {
    return (
        <div className="sidebar__personal">
            <p className="sidebar__personal-name">{name}</p>
        </div>
    );
}

function SidebarItem() {
    return(
        <div className="sidebar__item">
            <a href="#" className="sidebar__link">
                <img src="img/playlist01.png" alt="day's playlist" className="sidebar__img" />
            </a>
        </div>
    );
}

