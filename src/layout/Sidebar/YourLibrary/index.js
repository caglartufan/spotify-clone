import { ReactComponent as LibraryIcon } from '../../../assets/icons/library.svg';
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';
import { ReactComponent as RightArrowIcon } from '../../../assets/icons/right-arrow.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';
import { ReactComponent as CaretDownIcon } from '../../../assets/icons/caret-down.svg';

import likedSongsImg from '../../../assets/images/liked-songs-640.png';
import goodForTooLongImg from '../../../assets/images/good-for-too-long.webp';
import nickelbackImg from '../../../assets/images/nickelback.webp';
import chillsPlaylistImg from '../../../assets/images/chills-playlist.jfif';
import weWontBeAlonePlaylistImg from '../../../assets/images/we-wont-be-alone-playlist.jfif';
import yourTopSongs2022Img from '../../../assets/images/your-top-songs-2022_default_en.jpg';
import russkayaRokMuzikaPlaylistImg from '../../../assets/images/russkaya-rok-muzika-playlist.jfif';
import readyMyMindPlaylistImg from '../../../assets/images/read-my-mind-playlist.jfif';

import Card from '../../../components/UI/Card';
import Button from '../../../components/UI/Button';
import Icon from '../../../components/UI/Icon';

import LibraryList from './LibraryList';

const libraryItems = [
    {
        coverImage: likedSongsImg,
        title: 'Liked Songs',
        category: 'Playlist',
        songs: 339,
        pinned: true
    }, {
        coverImage: goodForTooLongImg,
        title: 'Good for Too Long',
        category: 'Album',
        artist: 'Deaf Election',
        pinned: true
    }, {
        coverImage: nickelbackImg,
        title: 'Nickelback',
        category: 'Artist',
        pinned: false
    }, {
        coverImage: chillsPlaylistImg,
        title: 'Chills',
        category: 'Playlist',
        creator: 'n3pix',
        pinned: false
    }, {
        coverImage: weWontBeAlonePlaylistImg,
        title: 'We Won\'t Be Alone',
        category: 'Playlist',
        creator: 'n3pix',
        pinned: false
    }, {
        coverImage: yourTopSongs2022Img,
        title: 'Your Top Songs 2022',
        category: 'Playlist',
        creator: 'Spotify',
        pinned: false
    }, {
        coverImage: russkayaRokMuzikaPlaylistImg,
        title: 'Русская Рок-Музыка',
        category: 'Playlist',
        creator: 'n3pix',
        pinned: false
    }, {
        coverImage: readyMyMindPlaylistImg,
        title: 'Read My Mind',
        category: 'Playlist',
        creator: 'n3pix',
        pinned: false
    }
];

const YourLibrary = props => {
    return (
        <Card className="flex-auto">
            <div className="flex flex-col gap-y-4 px-4 py-2">
                <header className="flex items-center">
                    <div className="flex-1">
                        <Button className="flex items-center gap-x-3 h-10 py-1 px-2">
                            <Icon  component={LibraryIcon} />
                            <span className="text-base font-bold">
                                Your Library
                            </span>
                        </Button>
                    </div>
                    <div className="flex gap-x-2">
                        <Button rounded>
                            <Icon component={PlusIcon} />
                        </Button>
                        <Button rounded>
                            <Icon component={RightArrowIcon} />
                        </Button>
                    </div>
                </header>
                <div className="flex gap-x-2">
                    <Button tinted>
                        Playlists
                    </Button>
                    <Button tinted>
                        Artists
                    </Button>
                    <Button tinted>
                        Albums
                    </Button>
                </div>
            </div>
            <div className="h-[440px] overflow-y-scroll px-2 pb-2">
                <div className="flex justify-between pt-0.5 px-2">
                    <Button rounded>
                        <Icon component={SearchIcon} width={16} height={16} />
                    </Button>
                    <div>
                        <Button className="flex items-center gap-x-2 h-8 ms-2 ps-3 pe-2">
                            <span className="text-sm">Recents</span>
                            <Icon component={CaretDownIcon} />
                        </Button>
                    </div>
                </div>
                <div>
                    <LibraryList items={libraryItems} />
                </div>
            </div>
        </Card>
    );
};

export default YourLibrary;