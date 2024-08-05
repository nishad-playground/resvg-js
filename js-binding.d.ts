/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export declare function renderAsync(svg: string | Buffer, options?: string | undefined | null, signal?: AbortSignal | undefined | null): Promise<RenderedImage>
export declare class BBox {
  x: number
  y: number
  width: number
  height: number
}
export declare class Resvg {
  constructor(svg: string | Buffer, options?: string | undefined | null)
  /** Renders an SVG in Node.js */
  render(): RenderedImage
  /** Output usvg-simplified SVG string */
  toString(): string
  /**
   * Calculate a maximum bounding box of all visible elements in this SVG.
   *
   * Note: path bounding box are approx values.
   */
  innerBBox(): BBox | undefined
  /**
   * Calculate a maximum bounding box of all visible elements in this SVG.
   * This will first apply transform.
   * Similar to `SVGGraphicsElement.getBBox()` DOM API.
   */
  getBBox(): BBox | undefined
  /**
   * Use a given `BBox` to crop the svg. Currently this method simply changes
   * the viewbox/size of the svg and do not move the elements for simplicity
   */
  cropByBBox(bbox: BBox): void
  imagesToResolve(): Array<string>
  resolveImage(href: string, buffer: Buffer): void
  /** Get the SVG width */
  get width(): number
  /** Get the SVG height */
  get height(): number
}
export declare class RenderedImage {
  /** Write the image data to Buffer */
  asPng(): Buffer
  /** Get the RGBA pixels of the image */
  get pixels(): Buffer
  /** Get the PNG width */
  get width(): number
  /** Get the PNG height */
  get height(): number
}
