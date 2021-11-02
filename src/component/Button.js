/* eslint-disable react/prefer-stateless-function */
import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, locale: currentLocale } = this.props;
    const { change: nextChange, locale: previousLocale } = nextProps;
    if (currentChange === nextChange && currentLocale === previousLocale) {
      return false;
    }
    return true;
  }

  render() {
    const { change, locale, show } = this.props;
    return (
      <>
        <button type="button" onClick={() => change(locale)}>
          {locale === "bn-BD" ? "Change Clock" : "ঘড়ি পরিবর্তন করুন"}
        </button>
        {show && <p>Hello</p>}
      </>
    );
  }
}

export default Button;
