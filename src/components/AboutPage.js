import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';

function AboutPage() {
  return (
    <div>
      <FormattedMessage id="aboutpage-text" defaultMessage="This is some Text on the About page"/>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
