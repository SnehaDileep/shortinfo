import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import { data } from "./utils";
import './styles.scss';
import {MdWork} from 'react-icons/md';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="timeline">

        <div className="timeline__academiccredentials">
          <h3 className="timeline__academiccredentials__header-text">ACADEMIC CREDENTIALS</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.academiccredentials.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__academiccredentials__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color : 'var(--yellow-theme-sub-text-color)',
                  border : '1.5px solid var(--yellow-theme-main-color)'
                }}
                icon={<MdWork/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--yellow-theme-main-color)',

                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>

                  <h4>
                    {item.subTitle}
                  </h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className="timeline__courses">
          <h3 className="timeline__courses__header-text">ADDITIONAL COURSE/TRAININGS</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
          {data.courses.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__courses__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color : 'var(--yellow-theme-sub-text-color)',
                  border : '1.5px solid var(--yellow-theme-main-color)'
                }}
                icon={<MdWork/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--yellow-theme-main-color)',

                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>

                  <h4>
                    {item.subTitle}
                  </h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>

              </VerticalTimelineElement>
            ))}
            </VerticalTimeline>
        </div>

        <div className="timeline__academicprojects">
          <h3 className="timeline__academicprojects__header-text">ACADEMIC PROJECTS</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.academicprojects.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__academicprojects__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color : 'var(--yellow-theme-sub-text-color)',
                  border : '1.5px solid var(--yellow-theme-main-color)'
                }}
                icon={<MdWork/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--yellow-theme-main-color)',

                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>

                  <h4>
                    {item.subTitle}
                  </h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

      </div>
    </section>
  );
};
export default Resume;
