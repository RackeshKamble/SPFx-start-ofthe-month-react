import * as React from 'react';
import styles from './SpfxStartOftheMonthReact.module.scss';
import { ISpfxStartOftheMonthReactProps } from './ISpfxStartOftheMonthReactProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpfxStartOftheMonthReact extends React.Component<ISpfxStartOftheMonthReactProps, {}> {
  public render(): React.ReactElement<ISpfxStartOftheMonthReactProps> {
    return (
      <div className={ styles.spfxStartOftheMonthReact }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Star Of the Month</span>
                <p className={ styles.subTitle }>Our Star of the Month.</p>
                <img className={styles.imgProfile} src={escape(this.props.empimageurl)}/>
                <br/>
                <p className={ styles.empname }>{escape(this.props.empname)}</p>
                <p className={ styles.description }>{escape(this.props.empbio)}</p>
                <p className={ styles.description }>{escape(this.props.empdepartment)} {' epartment'}</p>
                <p className={ styles.description }>{escape(this.props.empexperience.toString())} {' years of experience'}</p>
                              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
