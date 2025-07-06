import { forwardRef, PropsWithChildren, ReactNode } from 'react';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import BsOverlayTrigger, {
  OverlayTriggerType,
} from 'react-bootstrap/OverlayTrigger';
import BsTooltip, {
  TooltipProps as BsTooltipProps,
} from 'react-bootstrap/Tooltip';

export type TooltipProps = PropsWithChildren<{
  content: ReactNode;
  placement?: BsTooltipProps['placement'];
  className?: string;
  trigger?: OverlayTriggerType;
}>;

// @ts-expect-error x3 error
export const Tooltip: BsPrefixRefForwardingComponent<'span', TooltipProps> =
  forwardRef<HTMLSpanElement, TooltipProps>(function Tooltip({
    children,
    placement,
    content,
    className,
    trigger,
    // @ts-expect-error x3 error
    as: Component = 'span',
    ...props
  }) {
    return (
      <BsOverlayTrigger
        trigger={trigger}
        placement={placement}
        overlay={<BsTooltip>{content}</BsTooltip>}
      >
        <Component className={className} {...props}>
          {children}
        </Component>
      </BsOverlayTrigger>
    );
  });
