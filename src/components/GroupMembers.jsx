import Carousel from "react-elastic-carousel"
function GroupMembers() {
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2},
        {width: 760, itemsToShow: 3}
    ]
    return (
        <>
        <div className="group-members-container">
            <div className="group-members-header">
                <h5 className="text-bg">ჯგუფის წევრები</h5>
            </div>
            <div className="group-members-body">
                <Carousel breakPoints={breakPoints} showArrows={false}>
                    <div className="member">1</div>
                    <div className="member">2</div>
                    <div className="member">3</div>
                    <div className="member">4</div>
                    <div className="member">5</div>
                    <div className="member">6</div>
                </Carousel>
            </div>
        </div>
        </>
    )
}
export default GroupMembers