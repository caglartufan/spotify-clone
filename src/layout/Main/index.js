import { ReactComponent as AngleLeftIcon } from '../../assets/icons/angle-left.svg';
import { ReactComponent as AngleRightIcon } from '../../assets/icons/angle-right.svg';
import { ReactComponent as InstallIcon } from '../../assets/icons/install.svg';

import profilePicture from '../../assets/images/profile-picture.jfif';
import elementEightyArtistImg from '../../assets/images/element-eighty-artist.jfif';
import untouchablesAlbumImg from '../../assets/images/untouchables-album.jfif';
import theFatOfTheLandAlbumImg from '../../assets/images/the-fat-of-the-land-album.jfif';
import weWontBeAlonePlaylistImg from '../../assets/images/we-wont-be-alone-playlist.jfif';
import dvrstArtistImg from '../../assets/images/dvrst-artist.jfif';
import chillsPlaylistImg from '../../assets/images/chills-playlist.jfif';

import Card from '../../components/UI/Card';
import Scrollable from '../../components/UI/Scrollable';
import Button from '../../components/UI/Button';
import Icon from '../../components/UI/Icon';
import Link from '../../components/UI/Link';
import Heading from '../../components/UI/Heading';
import PlayLists from '../../components/Media/PlayLists';
import { useState } from 'react';

const playListItems = [
    {
        coverImage: elementEightyArtistImg,
        title: 'Element Eighty',
        type: 'Album',
        themeColor: 'rgb(224, 168, 40)',
        isPlaying: false
    }, {
        coverImage: untouchablesAlbumImg,
        title: 'Untouchables',
        type: 'Album',
        themeColor: 'rgb(128, 8, 8)',
        isPlaying: false
    }, {
        coverImage: theFatOfTheLandAlbumImg,
        title: 'The Fat of the Land',
        type: 'Album',
        themeColor: 'rgb(64, 152, 192)',
        isPlaying: false
    }, {
        coverImage: weWontBeAlonePlaylistImg,
        title: 'We Won\'t Be Alone',
        type: 'Playlist',
        themeColor: 'rgb(248, 32, 88)',
        isPlaying: false
    }, {
        coverImage: dvrstArtistImg,
        title: 'DVRST',
        type: 'Artist',
        themeColor: 'rgb(168, 72, 64)',
        isPlaying: true
    }, {
        coverImage: chillsPlaylistImg,
        title: 'Chills',
        type: 'Playlist',
        themeColor: 'rgb(208, 0, 0)',
        isPlaying: false
    }
];

const Main = props => {
    const initialBg = 'rgb(168, 72, 64)';
    const [activeBg, setActiveBg] = useState(initialBg);

    const changeActiveBgHandler = (bg) => {
        setActiveBg(bg);
    };

    const backToInitialBgHandler = () => {
        setActiveBg(initialBg);
    };

    return (
        <Card className="flex flex-col overflow-hidden">
            <div className="flex-1 min-h-0">
                <Scrollable>
                    <div className="h-[332px] w-full absolute top-0 left-0 bg-gradient-to-b from-black/60 to-card transition-colors duration-1000" style={{ backgroundColor: activeBg }}></div>
                    <header className="flex justify-between h-16 px-6 py-4 sticky top-0">
                        <div className="absolute"></div>
                        <div className="flex gap-x-2 disabled:opacity-60">
                            <Button className="!bg-black/70" rounded disabled>
                                <Icon component={AngleLeftIcon} />
                            </Button>
                            <Button className="!bg-black/70" rounded disabled>
                                <Icon component={AngleRightIcon} />
                            </Button>
                        </div>
                        <div className="flex gap-x-2">
                            <Link className="flex items-center gap-x-[5px] h-8 text-white px-4 py-1 bg-black/[.54] rounded-full cursor-pointer transition-none hover:scale-[1.04] active:bg-black/[.72] active:scale-100">
                                <Icon component={InstallIcon} />
                                <span className="text-sm font-bold leading-[22.4px]">
                                    Install App
                                </span>
                            </Link>
                            <Button className="p-1 bg-black/[.54] rounded-full cursor-pointer transition-none hover:scale-[1.04] active:bg-black/[.72] active:scale-100 active:opacity-70">
                                <img src={profilePicture} alt="n3pix" className="w-6 h-6 rounded-full" />
                            </Button>
                        </div>
                    </header>
                    <div className="flex flex-col gap-y-6 pt-2 px-6 z-10 relative">
                        <section>
                            <Heading className="mb-4" secondary>
                                Good evening
                            </Heading>
                            <PlayLists
                                items={playListItems}
                                onMouseEnterOnAnItem={changeActiveBgHandler}
                                onMouseLeaveFromAnItem={backToInitialBgHandler}
                            />
                        </section>
                    </div>
                </Scrollable>
            </div>
        </Card>
    );
};

export default Main;