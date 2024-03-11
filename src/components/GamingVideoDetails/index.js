import ThemeVideoContext from '../../context/ThemeVideoContext'
import {VideoLink, GamingVideoItem, ThumbnailImage, Heading, Content, ViewsDate} from './styledComponents'

const GamingVideoDetails = props => {
    const {videoDetails} = props
    const {id, title, thumbnailUrl, viewCount} = videoDetails

    return (
        <ThemeVideoContext.Consumer>
            {value => {
                const {isDarkTheme} = value
                const color = isDarkTheme ? '#f9f9f9' : '#231f20'

                return (
                    <VideoLink to={`/videos/${id}`}>
                        <GamingVideoItem>
                            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                            <Content>
                                <Heading color={color}>{title}</Heading>
                                <ViewsDate color={color}>{viewCount} Watching Worldwide</ViewsDate>
                            </Content>
                        </GamingVideoItem>
                    </VideoLink>
                )
            }}
        </ThemeVideoContext.Consumer>
    )
}

export default GamingVideoDetails