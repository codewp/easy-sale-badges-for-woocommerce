<?php

class BadgeOutput {

    protected $styles = '';

    public function get_styles() {
        return $this->styles;
    }

    public function output_badges( $badges ) {
        if ( empty( $badges ) ) {
            return;
        }

        foreach ( $badges as $badge ) {
            $this->output_badge( $badge );
        }
    }

    public function output_badge( $badge ) {
        switch ( $badge->type ) {
            case 'timer':
                return output_timer_badge( $badge );

            case 'image':
                return output_image_badge( $badge );
        }
    }

    public function output_timer_badge( $badge ) {
        $span_style = '';
        if ( isset( $badge->opacity ) && 0 < strlen( trim( $badge->opacity ) ) ) {
            $span_style .= 'opacity: ' . absint( $badge->opacity ) . ';';
        }
        if ( ! empty( $badge->color ) && 0 < strlen( trim( $badge->color ) ) ) {
            $span_style .= ' color: ' . sanitize_text_field( trim( $badge->color ) ) . ';';
        }
        if ( isset( $badge->font_size ) && 0 < strlen( trim( $badge->opacity ) ) ) {
            $span_style .= ' font-size: ' . absint( $badge->font_size ) . 'px;';
        }

        $inner_span_style = '';
        if ( isset( $badge->font_size ) && 0 < strlen( trim( $badge->opacity ) ) ) {
            $inner_span_style .= ' font-size: ' . absint( $badge->font_size ) . 'px;';
        }

        $badge_icon_style = '';

        switch ($badge->badgeStyles) {
            case 'badge1':
                $badge_icon_style = '
                background-color: ' . $badge->badgeColor . ';
                top: 0px;
                left: ' . ($badge->badgePositionX == 'right' ? 'auto' : '0px') . ';
                right: ' . ($badge->badgePositionX == 'right' ? '0px' : '') . ';
                height: ' . $badge->heightBadge . 'px;
                width: ' . $badge->widthBadge . 'px;
                position: absolute;
                opacity: ' . $badge->opacity . ';
                text-align: center;
                text-shadow: none;
                color: ' . $badge->textColor . ';
                font-size: ' . $badge->fontSizeText . 'px;
                line-height: ' . $badge->lineHeightText . 'px;
                opacity: ' . $badge->opacity . ';
                border-top-left-radius: ' . $badge->topLeftRadius . 'px;
                border-top-right-radius: ' . $badge->topRightRadius . 'px;
                border-bottom-left-radius: ' . $badge->bottomLeftRadius . 'px;
                border-bottom-right-radius: ' . $badge->bottomRightRadius . 'px;
                z-index: ' . $badge->zIndex . ';
                transform: rotateX(' . $badge->rotationX . 'deg) rotateY(' . $badge->rotationY . 'deg) rotateZ(' . $badge->rotationZ . 'deg);
                ';
                break;
                case 'badge2':
                    $badge_icon_style = '
                    text-align: center;
                    display: inline-block;
                    position: absolute;
                    opacity: ' . $badge->opacity . ';
                    left: ' . ($badge->badgePositionX == 'right' ? 'auto' : '0px') . ';
                    right: ' . ($badge->badgePositionX == 'right' ? '0px' : '') . ';
                    top: 0px;
                    height: ' . $badge->heightBadge . 'px;
                    width: ' . $badge->widthBadge . 'px;
                    background: ' . $badge->badgeColor . ';
                    border-radius: 3px;
                    ';
                    $badge_icon_style2 = '
                    &::before {
                        border-left-color: transparent !important;
                        display: inline-block;
                        content: \'\';
                        position: absolute;
                        right: ' . ($badge->badgePositionX == 'right' ? 'auto' : '-20px') . ';
                        left: ' . ($badge->badgePositionX == 'right' ? '-20px' : '') . ';
                        top: 0;
                        border: 9px solid transparent;
                        border-width: 15px 15px;
                        border-color: ' . $badge->badgeColor . ';
                        transform: ' . ($badge->badgePositionX == 'right' ? 'rotate(0)' : 'rotate(180deg)') . ';
                    }
                    ';
                    break;
                    case 'badge3':
                        $badge_icon_style = '
                        position: absolute;
                        background-color: ' . $badge->badgeColor . ';
                        text-align: center;
                        border-radius: 3px;
                        opacity: ' . $badge->opacity . ';
                        top: 0px;
                        left: 0px;
                        height: ' . $badge->heightBadge . 'px;
                        width: ' . $badge->widthBadge . 'px;
                        line-height: 30px;
                        color: #fff;
                        ';
                        $badge_icon_style .= '
                        &::after {
                            content: \'\';
                            position: absolute;
                            bottom: 0px;
                            transform: ' . ($badge->badgePositionX == 'right' ? 'skew(-1055deg)' : 'skew(-15deg)') . ';
                            right: ' . ($badge->badgePositionX == 'right' ? 'auto' : '-10px') . ';
                            left: ' . ($badge->badgePositionX == 'right' ? '-10px' : '') . ';
                            width: 20px;
                            height: 100%;
                            background-color: ' . $badge->badgeColor . ';
                            border-radius: ' . ($badge->badgePositionX == 'right' ? '3px 0px 0px 3px' : '0 3px 3px 0') . ';
                        }
                        ';
                        break;
                        case 'badge4':
                            $badge_icon_style = '
                            border-radius: 3px;
                            padding: 0px 15px;
                            position: absolute;
                            opacity: ' . $badge->opacity . ';
                            display: inline-block;
                            background-color: ' . $badge->badgeColor . ';
                            top: 0px;
                            left: ' . ($badge->badgePositionX == 'right' ? 'auto' : '0px') . ';
                            right: ' . ($badge->badgePositionX == 'right' ? '0px' : '') . ';
                            height: ' . $badge->heightBadge . 'px;
                            width: ' . $badge->widthBadge . 'px;
                            line-height: 30px;
                            box-sizing: border-box;
                            border-bottom-right-radius: 1px !important;
                            border-top-right-radius: 1px !important;
                            ';
                            $badge_icon_style .= '
                            &::before {
                                position: absolute;
                                right: ' . ($badge->badgePositionX == 'right' ? 'auto' : '-14px') . ';
                                left: ' . ($badge->badgePositionX == 'right' ? '-14px' : '') . ';
                                top: 0px;
                                border-top-left-radius: ' . ($badge->badgePositionX == 'right' ? '0px' : '1px') . ';
                                border-bottom-left-radius: ' . ($badge->badgePositionX == 'right' ? '0px' : '1px') . ';
                                border-top-right-radius: ' . ($badge->badgePositionX == 'right' ? '1px' : '') . ';
                                border-bottom-right-radius: ' . ($badge->badgePositionX == 'right' ? '1px' : '') . ';
                                content: \'\';
                                display: block;
                                width: 0;
                                height: 0;
                                border-top: 15px solid transparent;
                                border-left: ' . ($badge->badgePositionX == 'right' ? 'none' : '15px solid ' . $badge->badgeColor) . ';
                                border-bottom: 15px solid transparent;
                                border-right: ' . ($badge->badgePositionX == 'right' ? '15px solid ' . $badge->badgeColor : '') . ';
                            }
                            ';
                            $badge_icon_style .= '
                            &::after {
                                display: block;
                                content: \'\';
                                position: absolute;
                                background: #ffffff;
                                width: 7px;
                                height: 7px;
                                border-radius: 10px;
                                right: ' . ($badge->badgePositionX == 'right' ? 'auto' : '0px') . ';
                                left: ' . ($badge->badgePositionX == 'right' ? '0px' : '') . ';
                                top: calc(100% / 2 - 4px);
                            }
                            ';
                            break;
            // Add additional cases as needed
        }

        // Add before after css to the $this->style;
        if ( ! empty( $badge->prop ) ) {
            $this->style .= ' .asnp-esb-badge::before { color: red; }';
        }

        echo '<div class="asnp-esb-badge asnp-esb-timer-badge" style="display: none;">';
        echo '<span style="' . esc_attr( $span_style ) . '">';
        echo '<span class="asnp-esb-inner-span"> style="' . esc_attr( $inner_span_style ) . '"></span>';
        echo '<span date-time="' . sanitize_text_field( $badge->endTime ) . '"></span>';
        echo '</span>';
        echo '</div>';
    }

    public function output_image_badge( $badge ) {

    }
}

