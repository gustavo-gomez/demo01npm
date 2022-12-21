import React from "react";
import styles from "../styles/styles.module.css"

interface Props {
	level: number;
	startPercLabel: string;
	endPercLabel: string;
	startPercentage: number;
	endPercentage: number;
	showRangeValues?: boolean;
	showLevelNumber?: boolean;
}

export const RangeBar = ({
										level,
										startPercLabel,
										endPercLabel,
										startPercentage,
										endPercentage,
										showRangeValues,
										showLevelNumber
									}: Props) => {

	const widthBar = startPercentage > 0 ? (endPercentage - startPercentage) : endPercentage;


	let levelColor = "#000000";

	return (
		<div className={styles.rangeBarContainer}>
			{
				showLevelNumber &&
        <div
          style={{
						left: `${level}%`,
						color: "#000000"
					}}
          className={styles.currentLevel}
        >
					{level}%
        </div>
			}
			<div className={styles.rangeBar100}>
				<div
					style={{
						left: `${startPercentage}%`,
						width: `${widthBar}%`
					}}
					className={styles.rangeValue}
				/>
				{
					level > 0 &&
          <div
            style={{
							left: `${level}%`,
						}}
            className={styles.rangeLevel}
          >
            <div
              style={{
								background: levelColor
							}}
              className={styles.level}
            />
          </div>
				}
			</div>
			{
				showRangeValues &&
        <div
          className={styles.rangeValues}
        >
          <span
            style={{
							left: `${startPercentage - 5}%`,
						}}
          >
            {startPercLabel}
          </span>
          <span
            style={{
							left: `${endPercentage - 5}%`,
						}}
          >
            {endPercLabel}
          </span>
        </div>
			}
		</div>
	);
};

RangeBar.defaultProps = {
	startPercentage: 0,
	endPercentage: 0,
	startPercLabel: "",
	endPercLabel: "",
	level: 0,
	showRangeValues: false,
	showLevelNumber: false,
};
