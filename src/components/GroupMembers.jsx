import Carousel from "react-elastic-carousel"
import nana from "../assets/images/nana.png"
import saba from "../assets/images/saba.png"
import vano from "../assets/images/Vano.png"
import nika from "../assets/images/nika.png"
import beqa from "../assets/images/Beqa.png"
import { useState } from "react"
function GroupMembers() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 760, itemsToShow: 3 }
    ]
    const [selectedMember, setSelectedMember] = useState(null);
    const handleMemberClick = (member) => {
        setSelectedMember(member);
    };
    const members =
        [
            {
                image: saba,
                name: "საბა",
                instrument: "პიანინო",
                radius: 140,
                desctiption: "ეგ არის საბა საბაძე, უკრავს პიანინოზე",
                color: "#EB5757"
            },
            {
                image: vano,
                name: "ვანო",
                instrument: "გიტარა",
                radius: 140,
                desctiption: "ეგ არის ვანო ვანიძე, უკრავს გიტარაზე",
                color: "#9B51E0"
            },
            {
                image: nana,
                name: "ნანა",
                instrument: "ცოცხი",
                radius: 140,
                desctiption: "ეგ არის ნანა ნანაძე, უკრავს ცოცხზე",
                color: "#2D9CDB"
            },
            {
                image: nika,
                name: "ნიკა",
                instrument: "გიტარა",
                radius: 140,
                desctiption: "ეგ არის ნიკა ნიკაძე, უკრავს გიტარაზე",
                color: "#333333"
            },
            {
                image: beqa,
                name: "ბექა",
                instrument: "მტვერსასრუტი",
                radius: 140,
                desctiption: "ეგ არის ბექა ბექაძე, უკრავს მტვერსასრუტზე",
                color: "#828282"
            }
        ];
    return (
        <>
            <div className="group-members-container">
                <div className="group-members-header">
                    <h5 className="text-bg">ჯგუფის წევრები</h5>
                </div>
                <div className="group-members-body">
                    <Carousel breakPoints={breakPoints} showArrows={false}>{
                        members.map((member, index) => {
                            return (
                                <div key={index} onClick={() => handleMemberClick(member)}>
                                    <div>
                                        <div>
                                            <img src={member.image} />
                                        </div>
                                        <div>
                                            <h3>{member.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
                {selectedMember && (
                    <div className="member-panel">
                        
                        <h2>{selectedMember.name} ~ {selectedMember.instrument}</h2>
                        <hr />
                        <div className="member-face"  style={{ backgroundColor: selectedMember?.color }}>
                            <img src={selectedMember.image} alt="" />
                        </div>
                        <h4>ორბიტალური დაშორება: {selectedMember.radius}</h4>
                        <p>{selectedMember.desctiption}</p>
                    </div>
                )}
            </div>
        </>
    )
}
export default GroupMembers