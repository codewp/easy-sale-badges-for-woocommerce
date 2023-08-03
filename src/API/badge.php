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
        switch ( $badge->badgeStyles ) {
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
        echo '</div>';
    }

    public function output_image_badge( $badge ) {

    }
}

