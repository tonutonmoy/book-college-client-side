import HomeHeader from "../HomeHeader/HomeHeader";
import HomePhotos from "../HomePhotos/HomePhotos";
import HomeReachPaper from "../HomeReachPaper/HomeReachPaper";
import HomeReview from "../HomeReview/HomeReview";
import HomeTopCollage from "../HomeTopCollege/HomeTopCollage";


const Home = () => {
    return (
        <div className=" w-[90%] mx-auto pt-[100px]">
            <HomeHeader></HomeHeader>

            <HomeTopCollage></HomeTopCollage>

            <HomePhotos></HomePhotos>

            <HomeReachPaper></HomeReachPaper>

            <HomeReview></HomeReview>
        </div>
    );
};

export default Home;