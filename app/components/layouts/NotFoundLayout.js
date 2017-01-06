import React from 'react';
import Page from '../pages/page.js';
import PostContent from '../posts/PostContent';

import CSSModules from 'react-css-modules';
import styles from '../pages/page.scss';

@CSSModules(styles, {allowMultiple: true})
class NotFoundLayout extends React.Component{

  render(){
    return(
      <Page>
        <div styleName="hero">
  				<div styleName="wrapper tight">
            <h2 styleName="title">404 - Page Not Found</h2>
  				</div>
  			</div>

  			<div styleName="content">
  				<div styleName="wrapper tight">

  				</div>
  			</div>
      </Page>
    )
  }
}

export default NotFoundLayout;
