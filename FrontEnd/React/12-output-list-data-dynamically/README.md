# output list data dynamically 

## static way 
```js
<CoreConcept {...CORE_CONCEPTS[0]}/>
<CoreConcept {...CORE_CONCEPTS[1]}/>
<CoreConcept {...CORE_CONCEPTS[2]}/>
<CoreConcept {...CORE_CONCEPTS[3]}/>
```
### cons
* we have to add items manually
* if one item removed from out data the empty container remains and we have to remove items manually 

## automate way 
* we can use map for mapping items of data array 
```js
<ul>
    {CORE_CONCEPTS.map((item)=><CoreConcept {...item}/>)}
</ul>
```