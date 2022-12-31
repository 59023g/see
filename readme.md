### WIP

"See" is a simple analytics library. It sends events to database. Right now set up for [supabase](https://supabase.com/).

### DATA MODEL


```
  item {
    created_at
    source_id?: EthAddress,
    source: url,
    action: url,
    action_detail: string
    action_type: visit | navigate | purchase
    referrer: url
  }
  
  itemToPost {
    data: item
  }
```

### API

`initSeeClient(config)` - Initializes database connection. By default, attaches `click` event listener to window. So, if the click is an `href`, it automatically sends event to database. Can disable if `config.disableEventListener = false`.

`see(itemToPost)` - Programmatically invoke 