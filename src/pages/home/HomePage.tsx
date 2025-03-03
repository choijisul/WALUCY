import Flex from "../../common/components/Flex.tsx";
import Text from "../../common/components/Text.tsx";
import styled from "styled-components";

export default function HomePage() {
    return <Background width="100%" height="100%" center>
        <ConTents gap={60} row center>
            <Flex gap={40}>
                <Flex gap={40} row>
                    <ProfileImg/>
                    <Flex spaceBetween style={{padding: "10px 0"}}>
                        <Text fontSize={32} fontWeight={600}>닉네임</Text>
                        <Flex gap={10}>
                            <Flex gap={2}>
                                <Text fontSize={12} fontWeight={400}>최애</Text>
                                <Text fontSize={18} fontWeight={400}>조원상</Text>
                            </Flex>
                            <Flex gap={2}>
                                <Text fontSize={12} fontWeight={400}>가입일</Text>
                                <Text fontSize={18} fontWeight={400}>2024.08.10</Text>
                            </Flex>
                            <Flex gap={2}>
                                <Text fontSize={12} fontWeight={400}>팬이된지</Text>
                                <Text fontSize={18} fontWeight={400}>26일차</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex width={442} row spaceBetween verticalBottom>
                    <Flex row gap={24}>
                        <Flex gap={6} horizontalCenter>
                            <Flex verticalBottom>
                                <img src="/assets/img/song/albumCover/album-cover1.jpg" width={160}/>
                                <SongTitle center>
                                    <Text fontSize={16} fontWeight={400} color="#FFFFFF" center>
                                        목 죽는 기사와 비단요람
                                    </Text>
                                </SongTitle>
                            </Flex>
                            <Text fontSize={14} fontWeight={400}>가장 좋아하는 곡</Text>
                        </Flex>
                        <Flex gap={6} horizontalCenter>
                            <img src="/assets/img/song/albumCover/album-cover1.jpg" width={160}/>
                            <Text fontSize={14} fontWeight={400}>가장 좋아하는 앨범</Text>
                        </Flex>
                    </Flex>
                    <img src="/assets/img/home/setting-icon.svg" height={36} style={{cursor: "pointer"}}/>
                </Flex>
            </Flex>
            <Post gap={20}>
                <Text fontSize={16} fontWeight={600}>내가 쓴 글</Text>
                <Flex gap={10}>
                    <MyPost row gap={18} verticalCenter>
                        <PostImg/>
                        <Flex gap={10}>
                            <Text fontSize={16} fontWeight={600}>오늘자 루시트콤</Text>
                            <Flex row gap={12}>
                                <Text fontSize={12} fontWeight={400}>#광일</Text>
                                <Text fontSize={12} fontWeight={400}>#루시트콤</Text>
                                <Text fontSize={12} fontWeight={400}>#레전드</Text>
                            </Flex>
                        </Flex>
                    </MyPost>
                    <MyPost row gap={18} verticalCenter>
                        <PostImg/>
                        <Flex gap={10}>
                            <Text fontSize={16} fontWeight={600}>오늘자 루시트콤</Text>
                            <Flex row gap={12}>
                                <Text fontSize={12} fontWeight={400}>#광일</Text>
                                <Text fontSize={12} fontWeight={400}>#루시트콤</Text>
                                <Text fontSize={12} fontWeight={400}>#레전드</Text>
                            </Flex>
                        </Flex>
                    </MyPost>
                </Flex>
            </Post>
        </ConTents>
    </Background>
}

const Background = styled(Flex)`
    background: url('/assets/img/home/homeBack/home-back1.jpg') center center no-repeat;
    background-size: cover;
    height: 100vh;
`;

const ConTents = styled(Flex)`
    width: 1120px;
    height: 554px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 40px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
`;

const ProfileImg = styled(Flex)`
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.25);
    background: url('/assets/img/home/homeProfile/profile-img1.jpg') center center no-repeat;
    background-size: cover;
    width: 200px;
    height: 234px;
`;

const SongTitle = styled(Flex)`
    position: absolute;
    width: 150px;
    background: rgba(0, 0, 0, 0.6);
    padding: 5px;
`;

const Post = styled(Flex)`
    height: 454px;
    overflow-x: hidden;
    overflow-y: auto;
`;

const MyPost = styled(Flex)`
    width: 500px;
    height: 100px;
    background: #FFFFFF;
    border-radius: 6px;
    cursor: pointer;
`;

const PostImg = styled(Flex)`
    background: url('/assets/img/home/ex-post-img.jpg') center center no-repeat;
    background-size: cover;
    width: 204px;
    height: 100%;
`;


