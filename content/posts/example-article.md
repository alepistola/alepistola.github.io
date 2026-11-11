---
title: "Example article: everything the template can do"
description: A hidden reference post. Copy it, rename it, and start writing.
date: 2026-11-11
status: published
visible: false
---

This post is a template. It has `visible: false`, so it is never listed or built on the live site; you only see it with `npm run dev`. Copy the file, change the front matter, and write.

## Front matter

Three fields decide what happens to a post. `status` is `draft`, `wip` or `published`: only published posts get a page, the others appear in the Writing list as titles.[^status] `visible: false` removes the post from the site entirely. If no post is visible, the Writing section disappears.

[^status]: A draft with `visible: true` is a public promise. Use it for things you actually intend to finish.

## Sidenotes

Write a normal Markdown footnote and it becomes a note in the margin, next to the sentence it belongs to.[^margin] On a phone the note folds under its paragraph.

[^margin]: Like this one. Keep them short: a source, a caveat, an aside. If it needs two paragraphs it belongs in the text.

## Code

```python
import xarray as xr

ds = xr.open_zarr("s3://bucket/sentinel2.zarr", chunks={"time": 1})
ndvi = (ds.B08 - ds.B04) / (ds.B08 + ds.B04)
```

Inline code looks like `ds.chunk({"x": 512})`.

## Figures, quotes and tables

> A quote is set in the same serif, indented, with an amber rule.

| Format | Best for | Chunked |
| --- | --- | --- |
| Zarr | n-dimensional arrays | yes |
| COG | single rasters | tiles |
| GeoParquet | vector tables | row groups |

Images go in `public/images/` and are written as `![alt text](/images/name.png)`. See `picture.md` for how they should look.
